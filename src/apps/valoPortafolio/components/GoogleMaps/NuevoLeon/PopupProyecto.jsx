import { useState } from "react";
import CerrarIcon from "@/apps/foro4/assets/icons/CerrarIcon";
import { ReturnIcon } from "@/apps/valoPortafolio/assets/icons/ReturnIcon";

export default function PopupProyecto({ selectedProject, handleCleanParam }) {
  const colors = selectedProject?.properties.colors;
  const ctas = selectedProject?.properties.cta ?? [];
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div
      className="absolute inset-0 z-40 flex w-full h-full justify-center items-center backdrop-blur-lg border-[clamp(1.48px,0.260417vw,5px)] border-valo"
      style={{
        backgroundColor: `${colors.background}b3`, // b3 ≈ 70% opacidad en hex
      }}
    >
      {/* Botón cerrar */}
      <button
        onClick={handleCleanParam}
        className="absolute right-0 top-0 w-fit h-fit p-[clamp(5.02px,0.885417vw,17px)] hover:cursor-pointer bg-valo"
      >
        <CerrarIcon className="size-[clamp(13.31px,2.34375vw,45px)]" />
      </button>

      {/* Botón volver al mapa */}
      <div className="absolute left-0 bottom-0 flex default-padding">
        <button
          onClick={handleCleanParam}
          className="group flex justify-between items-center w-[clamp(170px,16.2vw,311px)] h-[clamp(38px,3.65vw,70px)] px-[29px] 2xl:px-11.25 hover:cursor-pointer -translate-y-0.5 bg-valo hover:bg-white text-white hover:text-valo"
        >
          <span className="text-mobile-button lg:text-paragraph-button font-semibold group-hover:font-bold">
            Volver al Mapa
          </span>
          <span className="relative size-[clamp(4.5px,1.422vw,12px)] max-lg:p-1.5 lg:size-[clamp(16px,1.35vw,26px)]">
            <span className="absolute inset-0">
              <ReturnIcon />
            </span>
          </span>
        </button>
      </div>

      <div
        className={`flex w-[90vw] h-[61vh] gap-[clamp(4.43px,0.78125vw,15px)] ${selectedProject.properties.img ? "justify-between" : "justify-center"}`}
      >
        {/* Image */}
        {selectedProject.properties.img && (
          <div
            className="shrink-0 relative w-[clamp(282.72px,49.84375vw,957px)] aspect-957/657 border-[clamp(1.48px,0.260417vw,5px)]"
            style={{
              borderColor: colors.border,
              backgroundColor: `${colors.border}66`, // 66 ≈ 40% opacidad
            }}
          >
            <img
              src={selectedProject.properties.img}
              alt={selectedProject.properties.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        {/* Texts */}
        <div
          className="w-full max-w-[707px] h-full flex flex-col justify-center items-center text-center gap-[clamp(10.34px,1.822917vw,35px)]
    "
        >
          <h4 className="text-title-lg font-lumarc font-bold uppercase">
            {selectedProject.properties.title}
          </h4>
          <p className="text-[9px] lg:text-paragraph whitespace-pre-line leading-[120%]">
            {selectedProject.properties.description}
          </p>

          {/* CTA */}
          {ctas.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-[clamp(28px,4.688vw,60px)]">
              {ctas.map((cta, index) => {
                const Icon = cta.icon;

                if (cta.type === "link") {
                  return (
                    <a
                      key={index}
                      href={cta.href}
                      target={cta.target}
                      rel={
                        cta.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center justify-between lg:min-w-[150px] px-[clamp(5.02px,0.885417vw,17px)] gap-[clamp(7.09px,1.25vw,24px)] py-[clamp(5.91px,1.041667vw,20px)] text-white"
                      style={{ backgroundColor: colors.button }}
                    >
                      <span className="translate-y-0.5 text-[9px] font-semibold lg:text-paragraph-button whitespace-nowrap leading-none">
                        {cta.label}
                      </span>
                      {Icon && (
                        <span className="size-[clamp(12px,1.3vw,25px)]">
                          <Icon />
                        </span>
                      )}
                    </a>
                  );
                }

                if (cta.type === "video") {
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveVideo(cta.videoUrl)}
                      className="flex items-center justify-between lg:min-w-[150px] px-[clamp(5.02px,0.885417vw,17px)] gap-[clamp(7.09px,1.25vw,24px)] py-[clamp(5.91px,1.041667vw,20px)] text-white"
                      style={{ backgroundColor: colors.button }}
                    >
                      <span className="translate-y-0.5 text-[9px] font-semibold lg:text-paragraph-button whitespace-nowrap leading-none">
                        {cta.label}
                      </span>
                      {Icon && (
                        <span className="size-[clamp(12px,1.3vw,25px)]">
                          <Icon />
                        </span>
                      )}
                    </button>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>

      {/* Modal de video */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-[90%] lg:w-[clamp(466.41px,80.46875vw,980px)] aspect-video ring-[clamp(4px,0.45vw,10px)] dark:ring-amarillo shadow-2xl overflow-hidden"
            style={{ "--tw-ring-color": colors.border }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:cursor-pointer"
              aria-label="Cerrar video"
            >
              <CerrarIcon className="size-8" />
            </button>

            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={activeVideo}
              controls
              autoPlay
              playsInline
            />
          </div>

          <div className="absolute left-0 bottom-0 flex default-padding">
            <button
              onClick={() => setActiveVideo(null)}
              className="group flex justify-between items-center w-[clamp(170px,16.2vw,311px)] h-[clamp(38px,3.65vw,70px)] px-[29px] 2xl:px-11.25 hover:cursor-pointer -translate-y-0.5 bg-valo hover:bg-white text-white hover:text-valo"
            >
              <span className="text-mobile-button lg:text-paragraph-button font-semibold group-hover:font-bold">
                Regresar
              </span>
              <span className="relative size-[clamp(4.5px,1.422vw,12px)] max-lg:p-1.5 lg:size-[clamp(16px,1.35vw,26px)]">
                <span className="absolute inset-0">
                  <ReturnIcon />
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
