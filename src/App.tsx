import { SubscriptionModal } from "./components/subscription-modal";
import { Button } from "./components/ui/button";
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
      <Button size="lg" className="fixed bottom-4 right-4">
        Book Now
      </Button>
    </div>
  );
}

export default App;
