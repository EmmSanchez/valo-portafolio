import { useSearchParams } from "react-router";
import CerrarIcon from "@/apps/foro4/assets/icons/CerrarIcon";
import MapaNuevoLeon from "@/apps/valoPortafolio/components/GoogleMaps/NuevoLeon/MapaNuevoLeon";
import BackButton from "@/components/shared/Buttons/BackButton";
import { PROYECTOS_NUEVO_LEON } from "@/apps/valoPortafolio/data/Valo/ProyectosNuevoLeon";

const VALID_POPUPS = new Set(PROYECTOS_NUEVO_LEON.map((p) => p.landmarkId));

export default function NuevoLeon() {
  const [searchParams, setSearchParams] = useSearchParams();

  const popup = searchParams.get("popup");
  const validPopup = VALID_POPUPS.has(popup) ? popup : null;

  const handleCleanParam = () => {
    searchParams.delete("popup");
    setSearchParams(searchParams);
  };

  const selectedProject = validPopup
    ? (PROYECTOS_NUEVO_LEON.find((p) => p.landmarkId === popup) ?? null)
    : null;

  const colors = selectedProject?.properties.colors;
  const Icon = selectedProject?.properties.cta?.icon;

  return (
    <div className="relative w-dvw h-dvh">
      {/* Popup */}
      {validPopup && (
        <div
          className="absolute inset-0 z-40 flex w-full h-full justify-center items-center backdrop-blur-lg border-[clamp(1.48px,0.260417vw,5px)] border-valo"
          style={{
            backgroundColor: `${colors.background}b3`, // b3 ≈ 70% opacidad en hex
          }}
        >
          <button
            onClick={handleCleanParam}
            className="absolute right-0 top-0 w-fit h-fit p-[clamp(5.02px,0.885417vw,17px)] hover:cursor-pointer bg-valo"
          >
            <CerrarIcon className="size-[clamp(13.31px,2.34375vw,45px)]" />
          </button>

          <div
            className={`flex w-[90vw] h-[61vh] gap-[clamp(4.43px,0.78125vw,15px)] ${selectedProject.properties.img ? "justify-between" : "justify-center"}`}
          >
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
              {selectedProject.properties.cta && (
                <a
                  href={selectedProject.properties.cta.href}
                  target={selectedProject.properties.cta.target}
                  rel={
                    selectedProject.properties.cta.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`flex items-center justify-between w-[clamp(75.6px,13.333333vw,256px)] p-[clamp(5.02px,0.885417vw,17px)] text-white ${selectedProject.landmarkId === "montevo" ? "flex-row-reverse" : ""}`}
                  style={{ backgroundColor: colors.button }}
                >
                  <span className="text-[9px] lg:text-paragraph-button leading-none">
                    {selectedProject.properties.cta.label}
                  </span>

                  <span className="size-[clamp(12px,1.3vw,25px)]">
                    <Icon />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Map and Markers */}
      <div className="absolute z-0 inset-0">
        <MapaNuevoLeon />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 z-30 default-padding">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
