import { useRef, useState } from "react";
import { MODE, PLAYER } from "../const/Videos";

export const useVideoPlayer = ({ json }) => {
  const { videos } = json;

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  const currentPositionRef = useRef(null);
  const targetPositionRef = useRef(null);
  const mode = useRef(MODE.IDLE);

  // Para decidir cual componenete <video/> mostrar, con ref no se actualiza
  const [activePlayer, setActivePlayer] = useState(PLAYER.A);
  const toggleActivePlayer = () => {
    setActivePlayer((prev) => (prev === PLAYER.A ? PLAYER.B : PLAYER.A));
  };

  // Variables para renderizar en UI
  const [modeState, setModeState] = useState(MODE.IDLE);

  const activeRef = activePlayer === PLAYER.A ? videoRefA : videoRefB;
  const stagingRef = activePlayer === PLAYER.A ? videoRefB : videoRefA;

  // Función que recibe posición actual y decirle la direción
  const transitionTo = ({ position, direction }) => {
    if (direction !== "next" && direction !== "back") {
      throw new Error("Invalid direction");
    }

    const targetVideo = videos.find((video) => video.position === position);
    const currentIndex = videos.findIndex(
      (video) => video.position === currentPositionRef.current,
    );

    // Obtener transición
    const transitionSource =
      direction === "next"
        ? videos[currentIndex + 1].next
        : videos[currentIndex - 1].back;

    // Se asigna transición al componente que no esté visible
    stagingRef.current.src = transitionSource;
    stagingRef.current.load();

    targetPositionRef.current = position;
    mode.current = MODE.TRANSITIONING;
    setModeState(MODE.TRANSITIONING);

    // Esperar a que sea reproducible
    stagingRef.current.oncanplay = () => {
      stagingRef.current.oncanplay = null; // limpiar listener

      stagingRef.current.play();

      // Esperar a que el PRIMER FRAME esté pintado antes de mostrar
      stagingRef.current.requestVideoFrameCallback(() => {
        // Primer frame listo? -> cambiar pantalla
        requestAnimationFrame(() => {
          toggleActivePlayer();
        });

        // Cargar el idle final al componente donde estaba el idle anterior
        activeRef.current.src = targetVideo.src;
        activeRef.current.load();

        // Cuando termine la transición sigue...
        stagingRef.current.onended = () => {
          stagingRef.current.onended = null; // limpiar listener
          targetPositionRef.current = null;
          currentPositionRef.current = position;
          mode.current = MODE.IDLE;
          setModeState(MODE.IDLE);

          if (activeRef.current.readyState >= 3) {
            activeRef.current.play();
            stagingRef.current.src = null; // limpar componente donde estaba la transición
            toggleActivePlayer();
          } else {
            activeRef.current.oncanplay = () => {
              activeRef.current.oncanplay = null;
              activeRef.current.play();
              stagingRef.current.src = null; // limpar componente donde estaba la transición
              toggleActivePlayer();
            };
          }
        };
      });
    };
  };

  const loadDirect = (position) => {
    const targetVideo = videos.find((video) => video.position === position);

    // Cargar SIEMPRE en el staging (nunca en el visible)
    stagingRef.current.src = targetVideo.src;
    stagingRef.current.load();

    stagingRef.current.oncanplay = () => {
      stagingRef.current.oncanplay = null; // limpiar listener

      // Esperar primer frame real
      if ("requestVideoFrameCallback" in stagingRef.current) {
        stagingRef.current.requestVideoFrameCallback(() => {
          requestAnimationFrame(() => {
            // Ahora sí swap
            toggleActivePlayer();

            currentPositionRef.current = position;
            targetPositionRef.current = null;

            // Limpia el viejo staging (que ahora es el oculto)
            activeRef.current.src = null;
          });
        });
      } else {
        // Fallback
        requestAnimationFrame(() => {
          toggleActivePlayer();
          currentPositionRef.current = position;
          targetPositionRef.current = null;
          activeRef.current.src = null;
        });
      }
    };
  };

  const goTo = (position) => {
    // Evitar movimientos al momento de transición
    if (mode.current === MODE.TRANSITIONING) return;

    const diff = position - currentPositionRef.current; // 1 next, -1 back

    // Cuando hay refresh o primera vez cargando
    if (
      !currentPositionRef.current ||
      currentPositionRef.current === position
    ) {
      return loadDirect(position);
    }

    // Transición a siguiente
    if (diff === 1) {
      transitionTo({ position, direction: "next" });
    }

    // Transición a anterior
    if (diff === -1) {
      transitionTo({ position, direction: "back" });
    }

    // Cuando las posiciones no son consecutivas
    if (diff > 1 || diff < -1) {
      return loadDirect(position);
    }
  };

  return {
    videoRefA,
    videoRefB,
    goTo,
    activePlayer,
    modeState,
  };
};
