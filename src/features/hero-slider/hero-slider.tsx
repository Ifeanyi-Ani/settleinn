import { useState, useEffect, FormEvent } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sliderItem } from "@/constant";

export const HeroSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setShowModal(false);
  };

  return (
    <>
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

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Subscribe to Our Newsletter
            </DialogTitle>
            <DialogDescription>
              Get the latest updates and exclusive offers directly in your
              inbox.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>
            <DialogFooter className="sm:justify-between gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Subscribe</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
