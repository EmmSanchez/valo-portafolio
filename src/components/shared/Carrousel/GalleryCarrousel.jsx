import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function GalleryCarrousel({ images = [], navIndicator }) {
  const autoplay = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));

  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const goTo = (index) => emblaApi?.scrollTo(index);

  const setupSnaps = (api) => setScrollSnaps(api.scrollSnapList());

  const setActiveSnap = (api) => setSelectedSnap(api.selectedScrollSnap());

  useEffect(() => {
    if (!emblaApi) return;

    autoplay.current.play();

    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);

    emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  return (
    <div className="embla flex flex-col justify-end w-full h-full text-valo">
      <div className="embla__viewport w-full h-full flex" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {images.map((src, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%]">
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[clamp(30.16px,5.31vw,102px)] w-full flex gap-[clamp(2.96px,0.52vw,10px)] justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="flex hover:cursor-pointer"
          >
            {navIndicator?.(index, index === selectedSnap)}
          </button>
        ))}
      </div>
    </div>
  );
}
