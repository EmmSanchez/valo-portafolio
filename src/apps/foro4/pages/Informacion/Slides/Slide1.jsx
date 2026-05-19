import SlideImage from "@/apps/foro4/assets/images/informacion/slide1Image.webp";

export default function Slide1() {
  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      {/* Image */}
      <div className="hidden landscape:flex shrink-0 h-full w-[30%] items-center">
        <div className="relative w-full h-[85%] overflow-hidden">
          <img
            src={SlideImage}
            alt="Imagen de Foro 4"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full landscape:w-[70%] flex-col items-center justify-center px-[1vw] gap-[1vh] landscape:gap-[0.75vh] overflow-y-auto h-full py-2">
        <h3 className="text-title text-center font-lumarc font-semibold uppercase tracking-widest text-foro4-verde shrink-0">
          BIENVENIDO AL FUTURO DE LEÓN
        </h3>

        <div className="flex flex-col text-center gap-[2vh] landscape:gap-[0.75vh]">
          <div className="flex flex-col gap-[2vh]">
            <p className="text-subtitle-slide font-bold font-lumarc uppercase text-white">
              Ubicación Estratégica:
            </p>
            <p className="text-label text-white">
              Ubicada en una zona de alta visibilidad y fácil acceso en León.
              <br />
              Concepto de Estilo de Vida: ofrece una experiencia completa para
              los visitantes, con restaurantes, servicios, entretenimiento y
              áreas de convivencia.
              <br />
              Diversidad de Espacios: variada de locales comerciales, Hotel 5
              estrellas y oficinas corporativas
            </p>
          </div>

          <div className="flex flex-col gap-[2vh]">
            <p className="text-subtitle-slide font-bold font-lumarc uppercase text-white">
              Enfoque en Experiencias:
            </p>
            <p className="text-label text-white">
              Se posiciona como un lugar para eventos y experiencias.
              <br />
              Atracción de Marcas y Negocios: El enfoque en atraer marcas
              reconocidas y nuevos conceptos innovadores.
            </p>
          </div>

          <div className="flex flex-col gap-[2vh]">
            <p className="text-subtitle-slide font-bold font-lumarc uppercase text-white">
              Amplio Estacionamiento:
            </p>
            <p className="text-label text-white">
              Facilita el acceso de clientes con suficiente capacidad para
              recibir visitantes.
              <br />
              Ambiente Moderno y Atractivo: El diseño contemporáneo y agradable
              de la plaza genera una
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
