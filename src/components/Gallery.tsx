import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent } from "./ui/dialog";
import React from "react";

const portfolioItems = [
  // Sofa (8 items)
  {
    id: 1,
    title: "Sofa Modern Ruang Tamu",
    category: "Sofa",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1759722665935-0967b4e0da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjI3OTMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Pembuatan sofa modern dengan desain minimalis untuk ruang tamu"
  },
  {
    id: 7,
    title: "Restorasi Sofa Klasik",
    category: "Sofa",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1758978029267-ca37e034229c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzYyODMzNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Restorasi dan perbaikan sofa klasik dengan hasil seperti baru"
  },
  {
    id: 9,
    title: "Sofa Kulit Premium",
    category: "Sofa",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc29mYXxlbnwxfHx8fDE3NjI4MDcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sofa kulit asli dengan desain mewah dan nyaman"
  },
  {
    id: 20,
    title: "Sofa Sectional Luas",
    category: "Sofa",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN0aW9uYWwlMjBzb2ZhfGVufDF8fHx8MTc2Mjc3ODA2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sofa sectional untuk keluarga besar dengan desain modern"
  },
  {
    id: 21,
    title: "Sofa Kontemporer Elegan",
    category: "Sofa",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1759722667456-71e7bfd118b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MjgyMjkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sofa dengan desain kontemporer yang elegan dan modern"
  },
  {
    id: 22,
    title: "Sofa Beludru Mewah",
    category: "Sofa",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBzb2ZhfGVufDF8fHx8MTc2MjgzNTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sofa beludru dengan tampilan mewah dan nyaman"
  },
  {
    id: 23,
    title: "Sofa Sudut L-Shape",
    category: "Sofa",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1709620435386-73d1ad42155e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuZXIlMjBzb2ZhfGVufDF8fHx8MTc2MjgzNTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sofa sudut L-shape untuk optimalisasi ruang"
  },
  {
    id: 24,
    title: "Sofa Fabric Premium",
    category: "Sofa",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1686510347470-0e36eb055a30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjBzb2ZhfGVufDF8fHx8MTc2Mjc4OTMwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sofa dengan bahan fabric premium dan desain modern"
  },

  // Kursi (8 items)
  {
    id: 4,
    title: "Kursi Kantor Ergonomis",
    category: "Kursi",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1669985457873-0c540a1d832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjaGFpciUyMHJlcGFpcnxlbnwxfHx8fDE3NjI4MzM3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Reparasi dan pembuatan kursi kantor dengan desain ergonomis"
  },
  {
    id: 5,
    title: "Kursi Tamu Minimalis",
    category: "Kursi",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1757969687802-82493a29047a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGhvbHN0ZXJlZCUyMGNoYWlyfGVufDF8fHx8MTc2MjgzMzczOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Set kursi tamu dengan bahan kualitas premium"
  },
  {
    id: 12,
    title: "Kursi Santai Nyaman",
    category: "Kursi",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1518975555701-c6c56f3e650b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm1jaGFpciUyMGNvbWZvcnR8ZW58MXx8fHwxNzYyODM0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Armchair dengan desain ergonomis dan bahan berkualitas"
  },
  {
    id: 15,
    title: "Ottoman Multifungsi",
    category: "Kursi",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1626551039948-ddd7e595fe06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdHRvbWFuJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MjgzNDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ottoman dengan fungsi penyimpanan tambahan"
  },
  {
    id: 16,
    title: "Bangku Kayu Jati",
    category: "Kursi",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1691927825312-10a278001100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHNlYXRpbmd8ZW58MXx8fHwxNzYyODM0ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Bangku panjang dari kayu jati untuk ruang tamu"
  },
  {
    id: 18,
    title: "Kursi Recliner Premium",
    category: "Kursi",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1664560724581-e3b068a0a376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNsaW5lciUyMGNoYWlyfGVufDF8fHx8MTc2MjgzNDgzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Recliner dengan mekanisme otomatis dan bahan premium"
  },
  {
    id: 25,
    title: "Kursi Makan Kayu",
    category: "Kursi",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1758977403865-f79e156415b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjBjaGFpciUyMHdvb2R8ZW58MXx8fHwxNzYyNzg3MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Set kursi makan dari kayu berkualitas tinggi"
  },
  {
    id: 26,
    title: "Kursi Accent Modern",
    category: "Kursi",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1721932547078-38a815bb6b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NlbnQlMjBjaGFpcnxlbnwxfHx8fDE3NjI3NzQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Kursi accent dengan desain modern yang eye-catching"
  },

  // Spring Bed (8 items)
  {
    id: 3,
    title: "Spring Bed Custom",
    category: "Spring Bed",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2Mjc0OTk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Pembuatan spring bed custom dengan headboard elegant"
  },
  {
    id: 8,
    title: "Tempat Tidur Modern",
    category: "Spring Bed",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1690957530220-98bacb3c1163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWQlMjBmcmFtZXxlbnwxfHx8fDE3NjI3NTIxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Tempat tidur modern dengan frame kayu berkualitas"
  },
  {
    id: 27,
    title: "Spring Bed Luxury",
    category: "Spring Bed",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1759176171441-7afca44a5558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBtYXR0cmVzc3xlbnwxfHx8fDE3NjI4MzU0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Spring bed mewah dengan kasur premium dan headboard eksklusif"
  },
  {
    id: 28,
    title: "Tempat Tidur Minimalis",
    category: "Spring Bed",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1680503146454-04ac81a63550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwZnVybml0dXJlJTIwYmVkfGVufDF8fHx8MTc2Mjc3NzcwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Tempat tidur minimalis dengan desain simpel dan elegan"
  },
  {
    id: 29,
    title: "Spring Bed Upholstered",
    category: "Spring Bed",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1599682802483-c31c10e577a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGhvbHN0ZXJlZCUyMGJlZHxlbnwxfHx8fDE3NjI4MzU0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Spring bed dengan headboard upholstered yang empuk"
  },
  {
    id: 30,
    title: "Platform Bed Kayu",
    category: "Spring Bed",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1756888218791-88f80fbcf9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZHxlbnwxfHx8fDE3NjI4MzU0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Platform bed dengan konstruksi kayu solid"
  },
  {
    id: 31,
    title: "King Size Bed",
    category: "Spring Bed",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1731336250970-dc942b5e0746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5nJTIwc2l6ZSUyMGJlZHxlbnwxfHx8fDE3NjI4MzU0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "King size bed dengan headboard mewah dan nyaman"
  },
  {
    id: 32,
    title: "Set Kamar Tidur Lengkap",
    category: "Spring Bed",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1588796460666-590f1d712a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwc2V0fGVufDF8fHx8MTc2MjgzNTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Set kamar tidur lengkap dengan spring bed dan furniture pendukung"
  },

  // Custom (8 items)
  {
    id: 6,
    title: "Workshop Custom Furniture",
    category: "Custom",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1572540687997-faa6c247ba53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjI3ODgxODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Proses pembuatan furniture custom sesuai kebutuhan klien"
  },
  {
    id: 11,
    title: "Lemari Penyimpanan Modern",
    category: "Custom",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1707898309204-3930c9c179e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbmV0JTIwc3RvcmFnZXxlbnwxfHx8fDE3NjI4MjczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Lemari penyimpanan custom dengan desain elegan"
  },
  {
    id: 14,
    title: "Rak Buku Kayu",
    category: "Custom",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1725783521817-3f37e54390a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjB3b29kZW58ZW58MXx8fHwxNzYyODM0ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rak buku dari kayu solid dengan desain modern"
  },
  {
    id: 19,
    title: "Lemari Pakaian Custom",
    category: "Custom",
    location: "Samosir",
    image: "https://images.unsplash.com/photo-1630699144552-b2b60b277b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjI3NzYxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Wardrobe besar dengan desain sesuai kebutuhan"
  },
  {
    id: 33,
    title: "Meja TV Custom",
    category: "Custom",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1732947059444-c77291763751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0diUyMGNhYmluZXQlMjBzdGFuZHxlbnwxfHx8fDE3NjI4MzU0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Meja TV custom dengan ruang penyimpanan yang fungsional"
  },
  {
    id: 34,
    title: "Rak Display Custom",
    category: "Custom",
    location: "Balige",
    image: "https://images.unsplash.com/photo-1758279746549-d24f3784879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzaGVsdmluZ3xlbnwxfHx8fDE3NjI4MzU0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rak display custom untuk pajangan dengan desain unik"
  },
  {
    id: 35,
    title: "Sideboard Cabinet",
    category: "Custom",
    location: "Batam",
    image: "https://images.unsplash.com/photo-1593443746658-bfaece08b4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWRlYm9hcmQlMjBjYWJpbmV0fGVufDF8fHx8MTc2MjgzNTQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sideboard cabinet dengan desain elegan untuk ruang makan"
  },
  {
    id: 36,
    title: "Dresser Custom",
    category: "Custom",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1759406066694-c28cb8bef46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkcmVzc2VyfGVufDF8fHx8MTc2MjgzNTQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Dresser custom dengan laci dan cermin untuk kamar tidur"
  }
];

const categories = ["Semua", "Sofa", "Kursi", "Spring Bed", "Custom"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === "Semua" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Galeri Portofolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat hasil pekerjaan terbaik kami dalam pembuatan dan reparasi furniture berkualitas tinggi
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-accent"
              }`}
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
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.location}
                  </span>
                </div>
                <h3 className="mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
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
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {selectedImage.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Lokasi: {selectedImage.location}
                    </span>
                  </div>
                  <h3 className="mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}