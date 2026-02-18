import { SendIcon } from "@/apps/valoPortafolio/assets/icons/SendIcon";
import BackButton from "@/components/shared/Buttons/BackButton";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-white">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <div className="relative w-[clamp(50px,7.34vw,141px)]">
          <span className="absolute inset-0">
            <LogoValoMark className="text-valo" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-[clamp(495.89px,87.19vw,1674px)] h-[clamp(220.94px,38.85vw,746px)] px-[clamp(23.68px,4.17vw,80px)] py-[clamp(17.76px,3.13vw,60px)] text-valo">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-12.5"
        >
          {/* Titles */}
          <div>
            <h3 className="text-title font-bold font-lumarc uppercase tracking-widest leading-[100%]">
              Queremos ser tus socios estratégicos
            </h3>
            <p className="text-subtitle font-lumarc uppercase tracking-wider">
              Escríbenos
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-2.5 md:gap-3 lg:gap-5 xl:gap-10 2xl:gap-15">
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

            {/* Proyecto de interés */}
            <input
              type="text"
              id="proyecto"
              name="proyecto"
              maxLength="100"
              pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s.,'&\-]{2,100}$"
              placeholder="Proyecto de interés"
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
          </div>

          {/* Submit Button */}
          <div className="absolute z-10 bottom-0 right-0 default-padding">
            <button
              type="submit"
              className="group flex w-[clamp(180px,16.2vw,311px)] h-[clamp(38px,3.65vw,70px)] justify-between items-center px-[29px] 2xl:px-11.25 bg-valo hover:bg-white hover:cursor-pointer -translate-y-0.5"
            >
              <span className="text-paragraph-button font-semibold text-white group-hover:text-valo group-hover:font-bold">
                Enviar
              </span>

              <span className="relative w-[clamp(13px,1.3vw,25px)] h-[clamp(15px,1.46vw,28px)]">
                {/* Inactive */}
                <span className="absolute inset-0 group-hover:hidden">
                  <SendIcon isActive={false} />
                </span>
                {/* Active */}
                <span className="absolute inset-0 hidden group-hover:block">
                  <SendIcon isActive />
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 left-0 z-30 default-padding">
        <BackButton to="/" />
      </div>
    </div>
  );
}
