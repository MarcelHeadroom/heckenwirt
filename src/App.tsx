import { Navigation } from "./sections/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Features } from "./sections/Features";
import { Menu } from "./sections/Menu";
import { Gallery } from "./sections/Gallery";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
