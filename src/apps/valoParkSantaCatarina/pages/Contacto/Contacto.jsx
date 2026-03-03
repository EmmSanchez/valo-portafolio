import BackButton from "@/components/shared/Buttons/BackButton";
import imageContacto from "../../assets/images/contactobg.jpg";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import { SendIcon } from "@/apps/valoPortafolio/assets/icons/SendIcon";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <img
        src={imageContacto}
        alt="Fondo de Nave Industrial"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-dvw h-dvh bg-white/60 backdrop-blur-sm" />

      {/* Logo VPSC */}
      <div className="absolute top-0 left-0 default-logo-padding">
        <div className="relative w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]">
          <span className="absolute inset-0">
            <LogoValoParkSantaCatarina />
          </span>
        </div>
      </div>

      {/* FORM */}
      <div className="absolute inset-0 flex items-center justify-center w-dvw h-dvh">
        <div className="flex flex-col justify-center w-[clamp(495.89px,87.19vw,1674px)] h-[clamp(220.94px,38.85vw,746px)] px-[clamp(23.68px,4.17vw,80px)] py-[clamp(17.76px,3.13vw,60px)] text-valo pointer-events-auto">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-12.5"
          >
            {/* Titles */}
            <div>
              <h3 className="text-title font-bold font-lumarc uppercase tracking-widest leading-[100%]">
                Queremos ser tus socios/aliados
              </h3>
              <p className="text-subtitle font-lumarc uppercase tracking-wider">
                Mandanos Mensaje
              </p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-x-[clamp(7.99px,1.41vw,27px)] gap-y-[clamp(20.74px,6.48vh,70px)]">
              {/* Nombre */}
              <input
                type="text"
                id="nombre"
                name="nombre"
                maxLength="50"
                pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'\-]{2,50}$"
                placeholder="Nombre"
                required
                className="contact-input"
              />

              {/* Apellido */}
              <input
                type="text"
                id="apellido"
                name="apellido"
                maxLength="50"
                pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'\-]{2,50}$"
                placeholder="Apellido"
                required
                className="contact-input"
              />

              {/* Correo */}
              <input
                type="email"
                id="correo"
                name="correo"
                maxLength="100"
                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                placeholder="Correo"
                required
                className="contact-input"
              />

              {/* Nave */}
              <input
                type="text"
                id="nave"
                name="nave"
                maxLength="100"
                pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s.,'&\-]{2,100}$"
                placeholder="Nave 11"
                required
                className="contact-input"
              />

              {/* Teléfono */}
              <input
                type="tel"
                id="telefono"
                name="telefono"
                maxLength="15"
                pattern="^[0-9+\(\)\s\-]{8,15}$"
                placeholder="Número de teléfono"
                required
                className="contact-input"
              />

              {/* ¿Cómo te enteraste? */}
              <input
                type="text"
                id="como_enteraste"
                name="como_enteraste"
                maxLength="100"
                pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s.,'&\-]{2,100}$"
                placeholder="¿Cómo te enteraste de nosotros?"
                required
                className="contact-input"
              />
            </div>

            {/* Submit Button */}
            <div className="absolute z-10 bottom-0 right-0 default-padding">
              <button
                type="submit"
                className="group flex w-[clamp(180px,16.2vw,311px)] h-[clamp(38px,3.65vw,70px)] justify-between items-center px-[29px] 2xl:px-11.25 bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer -translate-y-0.5"
              >
                <span className="text-paragraph-button font-semibold text-white group-hover:font-bold">
                  Enviar
                </span>

                <span className="relative w-[clamp(13px,1.3vw,25px)] h-[clamp(15px,1.46vw,28px)]">
                  <span className="absolute inset-0">
                    <SendIcon isActive={false} />
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <BackButton
        to="/valoPark/santaCatarina"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
