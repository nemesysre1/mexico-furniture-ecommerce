import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const branches = [
  {
    city: 'Deli Serdang',
    address: 'Jl. Kongsi Marindal 1, Deli Serdang, Sumatera Utara',
    phone: '+62 813 6228 3542',
    email: 'udmexico@gmail.com',
    whatsapp: '6281362283542',
  },
  {
    city: 'Batam',
    address: 'Jl. Raja Ali Haji, Batam Center, Kepulauan Riau',
    phone: '+62 812 7770 2044',
    email: 'udmexico@gmail.com',
    whatsapp: '6281277702044',
  },
  {
    city: 'Balige',
    address: 'Jl. Patuan Nagari, Balige, Sumatera Utara',
    phone: '+62 852 2143 0798',
    email: 'udmexico@gmail.com',
    whatsapp: '6285221430798',
  },
  {
    city: 'Samosir',
    address: 'Jl. Hadrianus Sinaga, Pintu Sona, Sumatera Utara',
    phone: '+62 852 2143 0798',
    email: 'udmexico@gmail.com',
    whatsapp: '6285221430798',
  },
];

export function Branches() {
  const handleWhatsApp = (phone: string, city: string) => {
    const message = encodeURIComponent(`Halo UD.Mexico ${city}, saya ingin menanyakan tentang layanan furniture Anda.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <section
      id="branches"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Cabang Kami</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">Hubungi cabang terdekat untuk konsultasi atau pemesanan furniture Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {branch.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-muted-foreground">{branch.address}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{branch.email}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    onClick={() => handleWhatsApp(branch.whatsapp, branch.city)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() => handleCall(branch.phone)}
                    variant="outline"
                    className="w-full"
                  >
                    Telepon
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
