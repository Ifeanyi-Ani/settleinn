import { SubscriptionModal } from "./components/subscription-modal";
import { About } from "./features/about/about";
import { AppFooter } from "./features/app-footer/app-footer";
import { AppTopBar } from "./features/app-top-bar/app-top-bar";
import { Contact } from "./features/contact/contact";
import { Gallery } from "./features/gallery/gallery";
import { HeroSlider } from "./features/hero-slider/hero-slider";

function App() {
  return (
    <div className="w-full relative">
      <AppTopBar />
      <HeroSlider />
      <main className="container mx-auto space-y-8">
        <Gallery />
        <About />
        <Contact />
      </main>
      <AppFooter />

      <SubscriptionModal />
      <a
        href="https://wa.me/17059883937"
        className="fixed bottom-4 right-4 px-2.5 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90"
        target="_blank"
      >
        Book Now
      </a>
    </div>
  );
}

export default App;
