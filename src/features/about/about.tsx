import Bed from "@/assets/bed.png";
import Sofa from "@/assets/sofa.png";
import Bathroom from "@/assets/bathroom.png";
import Garage from "@/assets/private-garage.png";

export const About = () => {
  const amenities = [
    { icon: Sofa, title: "Living Room" },
    { icon: Bed, title: "2 Bedroom" },
    { icon: Bathroom, title: "2 Bathrooms" },
    { icon: Garage, title: "2 Garage" },
  ];

  return (
    <section id="about" className="w-full px-4 py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl flex justify-center md:text-left mb-8 md:mb-12">
          Home information and Amenities
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center md:text-left">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </section>
  );
};
