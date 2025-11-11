import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';

const products = [
  {
    name: 'Sofa',
    description: 'Reparasi dan pembuatan sofa dengan berbagai model dan bahan berkualitas',
    image:
      'https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTc1ODAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Kursi',
    description: 'Berbagai jenis kursi untuk rumah dan kantor dengan desain custom',
    image:
      'https://images.unsplash.com/photo-1682248241811-c60fac657a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjaGFpciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjE3Nzk3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Tempahan',
    description: 'Tempahan Furniture dengan kualitas terbaik',
    image:
      'https://images.unsplash.com/photo-1539624831128-04618668ce81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjE3NTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Spring Bed',
    description: 'Reparasi dan pembuatan spring bed untuk kenyamanan tidur maksimal',
    image:
      'https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzcHJpbmdiZWQlMjBiZWRyb29tfGVufDF8fHx8MTc2MTc3OTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Produk Kami</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">Kami menyediakan berbagai jenis furniture rumah tangga dengan kualitas terbaik</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
