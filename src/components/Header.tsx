import { Menu, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // Jika sedang di halaman lain (misalnya /gallery), kembali ke beranda dulu
      navigate('/');

      // Tunggu sedikit agar halaman utama sudah dirender
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    } else {
      // Jika sudah di halaman utama, langsung scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">UD</div>
          <span className="hidden md:block font-medium">Mexico Furniture</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-primary transition-colors"
          >
            Beranda
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="hover:text-primary transition-colors"
          >
            Produk
          </button>
          <Link
            to="/gallery"
            className="hover:text-primary transition-colors"
          >
            Galeri
          </Link>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-primary transition-colors"
          >
            Layanan
          </button>
          <button
            onClick={() => scrollToSection('branches')}
            className="hover:text-primary transition-colors"
          >
            Cabang
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection('branches')}
            className="hidden md:flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Hubungi Kami
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              asChild
              className="md:hidden"
            >
              <Button
                variant="outline"
                size="icon"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Beranda
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Produk
                </button>
                <Link
                  to="/gallery"
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Galeri
                </Link>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Layanan
                </button>
                <button
                  onClick={() => scrollToSection('branches')}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Cabang
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
