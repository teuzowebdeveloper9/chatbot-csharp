import Image from 'next/image';
import { Opinions } from '../constants/opinions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { LuBrain } from 'react-icons/lu';

export function OpinionsCarrousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 },
    },
  });

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  return (
    <div className="w-full overflow-hidden z-10" ref={emblaRef}>
      <div className="flex gap-4 px-2">
        {Opinions.map((item, index) => (
          <div
            key={index}
            className="w-full mb-5 md:w-1/3 items-center shrink-0 px-2"
          >
            <article className="bg-[#000000] hover:bg-[#1005d8] transition-colors transform hover:scale-105  duration-300 border-2 border-[#03015c] rounded-xl p-4 h-full">
              <Image
                src={item.photo}
                width={100}
                alt="User photo"
                height={100}
                className="rounded-full mb-4 object-cover w-24 h-24 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2 flex flex-row ">
                {item.name} <LuBrain color="white" className="w-5 h-5 ml-2" />
              </h3>
              <p className="text-sm">{item.feedback}</p>
              <p className="text-sm font-semibold my-2 ">
                feature used : {item.featureUsed}
              </p>
              <p className="text-sm font-semibold my-3">
                highlight : {item.highlight}
              </p>
            </article>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 bottom-[calc(100%/40*16)] md:bottom-[calc(100%/40*16)] lg:bottom-[calc(100%/40*16)] -translate-y-1/2 bg-[#000]  border-solid border-stone-200 border-2 hover:bg-stone-200 rounded-full p-2 shadow-lg z-10"
        onClick={scrollPrev}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-[#1005d8]" />
      </button>
      <button
        className="absolute right-0 bottom-[calc(100%/40*16)] md:bottom-[calc(100%/40*16)] lg:bottom-[calc(100%/40*16)] mt-[200px] -translate-y-1/2 bg-[#000] hover:bg-stone-200 border-solid border-stone-200 border-2 rounded-full p-2 shadow-lg z-10"
        onClick={scrollNext}
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-[#1005d8] " />
      </button>
    </div>
  );
}
