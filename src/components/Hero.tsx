import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjE3NTYwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Furniture Showroom"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 text-white">Reparasi & Pembuatan Furniture Berkualitas</h1>
          <p className="mb-8 max-w-2xl text-white/90">
            UD.Mexico adalah pilihan terpercaya untuk reparasi dan pembuatan furniture rumah tangga. 
            Dengan pengalaman bertahun-tahun, kami siap memberikan layanan terbaik untuk kebutuhan furniture Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('products')} 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Lihat Produk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('branches')} 
              variant="outline" 
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Hubungi Cabang Terdekat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
