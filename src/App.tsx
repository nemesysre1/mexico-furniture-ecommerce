import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Branches } from "./components/Branches";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Services />
        <Branches />
      </main>
      <Footer />
    </div>
  );
}