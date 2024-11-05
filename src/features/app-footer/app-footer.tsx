import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons/logo-icon";

export const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground/70 mt-auto w-full">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <LogoIcon className="w-40 md:w-52 h-16 md:h-20 object-cover" />
            <p className="text-sm">
              Your trusted partner for comfortable and affordable
              accommodations.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" className="hover:text-primary-foreground">
                <Facebook size={20} />
              </Button>
              <Button size="icon" className="hover:text-primary-foreground">
                <Instagram size={20} />
              </Button>
              <Button size="icon" className="hover:text-primary-foreground">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold text-lg">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold text-lg">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@settleinn.com</li>
              <li>Phone: +1 (234) 567-8900</li>
              <li>Address: 123 Accommodation Street,</li>
              <li>Cityville, ST 12345</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm">
              &copy; {currentYear}. All rights reserved.
            </div>
            <div className="text-sm flex items-center gap-2">
              Powered and secured by
              <LogoIcon className="w-20 md:w-32 h-10 md:h-14 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
