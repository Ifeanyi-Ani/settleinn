import House1 from "@/assets/custom-01.jpeg";
import House2 from "@/assets/img10.jpg";
import House3 from "@/assets/img11.jpg";

export const sliderItem = [
  {
    image: House1,
    title: "",
    description: "",
  },
  {
    image: House2,
    title: "4 Bedroom flat",
    description: "this is a 4 bedroom flat",
  },

  {
    image: House3,
    title: "4 Bedroom flat",
    description: "this is a 4 bedroom flat",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const images = [
  { src: "/assets/img1.webp", alt: "house-1" },
  { src: "/assets/img-t2.webp", alt: "house-2" },
  { src: "/assets/img3.webp", alt: "house-3" },
  { src: "/assets/img1.webp", alt: "house-4" },
  { src: "/assets/img2.webp", alt: "house-5" },
  { src: "/assets/img-t1.webp", alt: "house-6" },
  { src: "/assets/img2.webp", alt: "house-7" },
  { src: "/assets/img6.jpg", alt: "house-8" },
];

export const plans = [
  {
    name: "Basic Service ",
    price: "$150",
    description:
      "Ideal for those seeking basic arrival support and a smooth start.",
    features: [
      "Local Pick Up: Airport or bus terminal pick up for easy arrival.",
      "Basic Housing Search Support: Guidance to help find housing options.",
      "Settling-In Support: One full day of support to help get you situated and comfortable.",
    ],
    PricingOpt: [
      "1 Person: $150",
      "2 Persons: $225",
      "3 Persons: $300",
      "Family (Up to 5): $400",
    ],
  },
  {
    name: "Essential Service",
    price: "$250",
    description:
      "Best for those wanting more extensive support and reliable housing options.",
    features: [
      "Intercity Pick Up: Convenient transportation from nearby cities.",
      "Essential Housing Search Support: Targeted assistance to locate suitable housing options.",
      "Extended Settling-In Support: Two days of guided support for a smooth transition.",
    ],
    PricingOpt: [
      "1 Person: $250",
      "2 Persons: $375",
      "3 Persons: $500",
      "Family (Up to 5): $650",
    ],
  },
  {
    name: "Premium Service",
    price: "$400",
    description:
      "Perfect for clients seeking comprehensive assistance with high-quality housing and transport.",
    features: [
      "Comprehensive Transportation: Intercity pick up and drop off, plus local pick up and drop off.",
      "Premium House Search Support: Advanced assistance to find high-quality housing.",
      "3-Day Settling-In Support: Ongoing assistance to help you establish yourself comfortably",
    ],
    PricingOpt: [
      "1 Person: $400",
      "2 Persons: $600",
      "3 Persons: $800",
      "Family (Up to 5): $1,000",
    ],
  },
  {
    name: "Ultimate (VIP) Service",
    price: "$1,000",
    description:
      "Designed for those who want a complete, fully-managed transition with premium perks.",
    features: [
      "Full-Service Transportation: Choice of intercity pick up or drop off, plus local pick up and drop off.",
      "3-Day Hotel Stay: Comfortable accommodation to start your stay in the city.",
      "City Tour: A personalized day tour of beautiful and important local sites.",
      "Settle Inn Support Kit: Essentials to make your transition easier.",
      "1-Week Settling-In Support: Full support for one week to ensure a seamless experience.",
    ],

    PricingOpt: [
      "1 Person: $1,000",
      "2 Persons: $1,500",
      "3 Persons: $2,000",
      "Family (Up to 5): $2,500",
    ],
  },
];
