import { Wrench, Package, Ruler, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Wrench,
    title: "Reparasi Furniture",
    description: "Layanan perbaikan furniture lama agar tampak seperti baru kembali dengan hasil memuaskan"
  },
  {
    icon: Package,
    title: "Pembuatan Custom",
    description: "Pembuatan furniture sesuai pesanan dengan desain dan ukuran yang Anda inginkan"
  },
  {
    icon: Ruler,
    title: "Konsultasi Desain",
    description: "Konsultasi gratis untuk membantu Anda menentukan desain furniture yang tepat"
  },
  {
    icon: Star,
    title: "Kualitas Terjamin",
    description: "Menggunakan bahan berkualitas tinggi dan dikerjakan oleh tenaga ahli berpengalaman"
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Layanan Kami</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Berbagai layanan profesional untuk memenuhi kebutuhan furniture Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
