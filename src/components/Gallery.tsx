import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent } from './ui/dialog';
import React from 'react';
import kursi1 from '../assets/gallery/kursi1.jpg';
import kursi2 from '../assets/gallery/kursi2.jpg';
import kursi3 from '../assets/gallery/kursi3.jpg';
import kursi4 from '../assets/gallery/kursi4.jpg';
import kursi5 from '../assets/gallery/kursi5.jpg';
import kursi6 from '../assets/gallery/kursi6.jpg';
import kursi7 from '../assets/gallery/kursi7.jpg';
import kursi8 from '../assets/gallery/kursi8.jpg';
import sofa1 from '../assets/gallery/sofa1.jpg';
import sofa2 from '../assets/gallery/sofa2.jpg';
import sofa3 from '../assets/gallery/sofa3.jpg';
import sofa4 from '../assets/gallery/sofa4.jpg';
import sofa5 from '../assets/gallery/sofa5.jpg';
import sofa6 from '../assets/gallery/sofa6.jpg';
import sofa7 from '../assets/gallery/sofa7.jpg';
import sofa8 from '../assets/gallery/sofa8.jpg';
import springbed1 from '../assets/gallery/springbed1.jpg';
import springbed2 from '../assets/gallery/springbed2.jpg';
import springbed3 from '../assets/gallery/springbed3.jpg';
import springbed4 from '../assets/gallery/springbed4.jpg';
import springbed5 from '../assets/gallery/springbed5.jpg';
import springbed6 from '../assets/gallery/springbed6.jpg';
import springbed7 from '../assets/gallery/springbed7.jpg';
import springbed8 from '../assets/gallery/springbed8.jpg';
import tempahan1 from '../assets/gallery/tempahan1.jpg';
import tempahan2 from '../assets/gallery/tempahan2.jpg';
import tempahan3 from '../assets/gallery/tempahan3.jpg';
import tempahan4 from '../assets/gallery/tempahan4.jpg';
import tempahan5 from '../assets/gallery/tempahan5.jpg';
import tempahan6 from '../assets/gallery/tempahan6.jpg';
import tempahan7 from '../assets/gallery/tempahan7.jpg';
import tempahan8 from '../assets/gallery/tempahan8.jpg';

const portfolioItems = [
  // Sofa (8 items)
  {
    id: 1,
    title: 'Sofa Modern Ruang Tamu',
    category: 'Sofa',
    location: 'Medan',
    image: sofa1,
    description: 'Pembuatan sofa modern dengan desain minimalis untuk ruang tamu',
  },
  {
    id: 7,
    title: 'Restorasi Sofa Klasik',
    category: 'Sofa',
    location: 'Medan',
    image: sofa2,
    description: 'Restorasi dan perbaikan sofa klasik dengan hasil seperti baru',
  },
  {
    id: 9,
    title: 'Sofa Kulit Premium',
    category: 'Sofa',
    location: 'Batam',
    image: sofa5,
    description: 'Sofa kulit asli dengan desain mewah dan nyaman',
  },
  {
    id: 20,
    title: 'Sofa sudut',
    category: 'Sofa',
    location: 'Medan',
    image: sofa7,
    description: 'Sofa sectional untuk keluarga besar dengan desain modern',
  },
  {
    id: 21,
    title: 'Sofa Kontemporer Elegan',
    category: 'Sofa',
    location: 'Balige',
    image: sofa3,
    description: 'Sofa dengan desain kontemporer yang elegan dan modern',
  },
  {
    id: 22,
    title: 'Sofa Baldu',
    category: 'Sofa',
    location: 'Samosir',
    image: sofa8,
    description: 'Sofa baldu dengan tampilan mewah dan nyaman',
  },
  {
    id: 23,
    title: 'Sofa Sudut L-Shape',
    category: 'Sofa',
    location: 'Batam',
    image: sofa6,
    description: 'Sofa sudut L-shape untuk optimalisasi ruang',
  },
  {
    id: 24,
    title: 'Sofa Fabric Premium',
    category: 'Sofa',
    location: 'Medan',
    image: sofa4,
    description: 'Sofa dengan bahan fabric premium dan desain modern',
  },

  // Kursi (8 items)
  {
    id: 4,
    title: 'Kursi Kantor Ergonomis',
    category: 'Kursi',
    location: 'Medan',
    image: kursi1,
    description: 'Reparasi dan pembuatan kursi kantor dengan desain ergonomis',
  },
  {
    id: 5,
    title: 'Kursi Tamu Minimalis',
    category: 'Kursi',
    location: 'Samosir',
    image: kursi2,
    description: 'Set kursi tamu dengan bahan kualitas premium',
  },
  {
    id: 12,
    title: 'Kursi Santai Nyaman',
    category: 'Kursi',
    location: 'Balige',
    image: kursi3,
    description: 'Armchair dengan desain ergonomis dan bahan berkualitas',
  },
  {
    id: 15,
    title: 'Ottoman Multifungsi',
    category: 'Kursi',
    location: 'Samosir',
    image: kursi4,
    description: 'Ottoman dengan fungsi penyimpanan tambahan',
  },
  {
    id: 16,
    title: 'Bangku Kayu Jati',
    category: 'Kursi',
    location: 'Balige',
    image: kursi5,
    description: 'Bangku panjang dari kayu jati untuk ruang tamu',
  },
  {
    id: 18,
    title: 'Kursi Recliner Premium',
    category: 'Kursi',
    location: 'Batam',
    image: kursi6,
    description: 'Recliner dengan mekanisme otomatis dan bahan premium',
  },
  {
    id: 25,
    title: 'Kursi Makan Kayu',
    category: 'Kursi',
    location: 'Medan',
    image: kursi7,
    description: 'Set kursi makan dari kayu berkualitas tinggi',
  },
  {
    id: 26,
    title: 'Kursi Accent Modern',
    category: 'Kursi',
    location: 'Batam',
    image: kursi8,
    description: 'Kursi accent dengan desain modern yang eye-catching',
  },

  // Spring Bed (8 items)
  {
    id: 3,
    title: 'Spring Bed Custom',
    category: 'Spring Bed',
    location: 'Balige',
    image: springbed1,
    description: 'Pembuatan spring bed custom dengan headboard elegant',
  },
  {
    id: 8,
    title: 'Tempat Tidur Modern',
    category: 'Spring Bed',
    location: 'Balige',
    image: springbed2,
    description: 'Tempat tidur modern hitam elegan dan berkualitas',
  },
  {
    id: 27,
    title: 'Spring Bed Luxury',
    category: 'Spring Bed',
    location: 'Medan',
    image:
      'https://images.unsplash.com/photo-1759176171441-7afca44a5558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBtYXR0cmVzc3xlbnwxfHx8fDE3NjI4MzU0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Spring bed mewah dengan kasur premium dan headboard eksklusif',
  },
  {
    id: 28,
    title: 'Tempat Tidur Minimalis',
    category: 'Spring Bed',
    location: 'Samosir',
    image: springbed3,
    description: 'Tempat tidur minimalis dengan desain simpel dan efisien',
  },
  {
    id: 29,
    title: 'Busa Matras Spring Bed Latex',
    category: 'Spring Bed',
    location: 'Batam',
    image: springbed4,
    description: 'Bahan busa matras latex untuk kenyamanan tidur optimal dan takkan mudah kempes',
  },
  {
    id: 30,
    title: 'Spring Bed Headless',
    category: 'Spring Bed',
    location: 'Medan',
    image: springbed5,
    description: 'Platform bed dengan konstruksi full busa dan per',
  },
  {
    id: 31,
    title: 'Spring Bed Anak anak dengan Kain Lucu',
    category: 'Spring Bed',
    location: 'Balige',
    image: springbed6,
    description: 'Spring bed khusus anak-anak dengan desain kain yang lucu dan menarik',
  },
  {
    id: 32,
    title: 'Set spring bed kamar tidur',
    category: 'Spring Bed',
    location: 'Samosir',
    image: springbed7,
    description: 'Set spring bed kamar tidur lengkap dengan spring bed untuk anak laki-laki dan perempuan',
  },

  // Custom (8 items)
  {
    id: 6,
    title: 'Sofa Custom untuk Ruang Keluarga',
    category: 'Custom',
    location: 'Batam',
    image: tempahan1,
    description: 'sofa custom dengan desain khusus sesuai permintaan pelanggan',
  },
  {
    id: 11,
    title: 'Sofa Sudut Custom',
    category: 'Custom',
    location: 'Samosir',
    image: tempahan2,
    description: 'Sofa sudut custom dengan desain elegan',
  },
  {
    id: 14,
    title: 'Kursi Ukir Custom',
    category: 'Custom',
    location: 'Batam',
    image: tempahan3,
    description: 'Kursi ukir custom dengan desain modern',
  },
  {
    id: 19,
    title: 'Sofa L Custom',
    category: 'Custom',
    location: 'Samosir',
    image: tempahan4,
    description: 'Sofa L custom dengan desain unik dan elegan',
  },
  {
    id: 33,
    title: 'Rangka Kursi Ukir Custom',
    category: 'Custom',
    location: 'Medan',
    image: tempahan5,
    description: 'Rangka kursi ukir custom dengan desain autentik dan detail',
  },
  {
    id: 34,
    title: 'Rak Display Custom',
    category: 'Custom',
    location: 'Balige',
    image: tempahan6,
    description: 'Rak display custom untuk pajangan dengan desain elegan',
  },
  {
    id: 35,
    title: 'Sofa Kayu Ukir Besar Custom',
    category: 'Custom',
    location: 'Batam',
    image: tempahan7,
    description: 'Sofa kayu ukir besar custom cocok untuk ruang tamu luas',
  },
  {
    id: 36,
    title: 'Kain Kualitas Tinggi',
    category: 'Custom',
    location: 'Medan',
    image: tempahan8,
    description: 'Kain kualitas tinggi untuk berbagai kebutuhan furniture custom',
  },
];

const categories = ['Semua', 'Sofa', 'Kursi', 'Spring Bed', 'Custom'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null);

  const filteredItems = selectedCategory === 'Semua' ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-16 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Galeri Portofolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Lihat hasil pekerjaan terbaik kami dalam pembuatan dan reparasi furniture berkualitas tinggi</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-background border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.location}</span>
                </div>
                <h3 className="mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <div className="space-y-4">
                <ImageWithFallback
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{selectedImage.category}</span>
                    <span className="text-sm text-muted-foreground">Lokasi: {selectedImage.location}</span>
                  </div>
                  <h3 className="mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
