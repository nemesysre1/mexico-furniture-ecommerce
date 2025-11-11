// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Branches } from "./components/Branches";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* Halaman Utama */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Products />
                  <Services />
                  <Branches />
                </>
              }
            />

            {/* Halaman Galeri */}
            <Route
              path="/gallery"
              element={
                <>
                  <Gallery />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
