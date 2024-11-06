import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { sliderItem } from "@/constant";

export const HeroSlider = () => {
  return (
    <section id="home">
      <div className="relative w-full">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div className="relative">
            <CarouselContent>
              {sliderItem.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white p-4 max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                          {item.title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                          {item.description}
                        </p>
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-gray-200"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white/90" />
            <CarouselNext className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white/90" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
