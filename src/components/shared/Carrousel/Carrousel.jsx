import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CircleIndicatorIcon } from "@/apps/valoPortafolio/assets/icons/CircleIndicatorIcon";

export function Carrousel({ slides = [] }) {
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
    <div className="embla flex flex-col justify-end w-full h-full text-valo pt-6">
      <div className="embla__viewport w-full h-full flex" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%]">
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={"flex hover:cursor-pointer"}
          >
            {index === selectedSnap ? (
              <CircleIndicatorIcon
                isActive
                className="size-[clamp(20px,2.08vw,40px)]"
              />
            ) : (
              <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-valo" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
