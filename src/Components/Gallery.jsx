import React from "react";
import { motion } from "framer-motion";
import { Card, CardFooter, Button, Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import { Camera, Maximize2, X } from "lucide-react";

// Import local images from src/Public/img using @ alias
import img1 from "@/Public/img/FOTO DEPAN.jpeg";
import img2 from "@/Public/img/Hero Section Photo.jpeg";
import img3 from "@/Public/img/WhatsApp Image 2026-04-24 at 11.15.00 PM (1).jpeg";
import img4 from "@/Public/img/WhatsApp Image 2026-04-24 at 11.15.00 PM (2).jpeg";
import img5 from "@/Public/img/WhatsApp Image 2026-04-24 at 11.15.00 PM.jpeg";
import img6 from "@/Public/img/WhatsApp Image 2026-04-24 at 11.15.01 PM.jpeg";

const Gallery = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleOpen = (item) => {
    setSelectedImage(item);
    onOpen();
  };

  const galleryItems = [
    {
      title: "Kegiatan Utama",
      category: "Utama",
      url: img1,
      span: "col-span-2 row-span-2"
    },
    {
      title: "Hero Section",
      category: "Dokumentasi",
      url: img2,
      span: "col-span-1 row-span-1"
    },
    {
      title: "Proses Administrasi",
      category: "Administrasi",
      url: img3,
      span: "col-span-1 row-span-1"
    },
    {
      title: "Sosialisasi Tenaga Kerja",
      category: "Kegiatan",
      url: img4,
      span: "col-span-1 row-span-2"
    },
    {
      title: "Monitoring Lapangan",
      category: "Monitoring",
      url: img5,
      span: "col-span-1 row-span-1"
    },
    {
      title: "Evaluasi Program",
      category: "Evaluasi",
      url: img6,
      span: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-[#1EB2A6]"
          >
            <Camera size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Dokumentasi Kegiatan</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Galeri <span className="text-[#1EB2A6]">SIPEKERJA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Kumpulan momen penting dalam proses penempatan, pelatihan, dan digitalisasi data tenaga kerja di Nusa Tenggara Timur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${item.span === "col-span-2 row-span-2" ? "md:col-span-2 md:row-span-2 h-[400px] md:h-full" : "md:col-span-1 md:row-span-1 h-[250px] md:h-full"} group relative overflow-hidden rounded-[32px] bg-slate-100 dark:bg-slate-800 shadow-xl`}
            >
              <Card isFooterBlurred className="w-full h-full border-none rounded-none bg-transparent">
                <img
                  alt={item.title}
                  className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src={item.url}
                  loading="lazy"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardFooter className="absolute bottom-3 left-3 right-3 z-20 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-[7px] font-black uppercase tracking-widest text-[#1EB2A6] mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-white font-bold text-sm tracking-tight leading-none">
                      {item.title}
                    </h4>
                  </div>
                  <Button 
                    size="sm"
                    isIconOnly
                    onPress={() => handleOpen(item)}
                    className="bg-[#1EB2A6] text-white min-w-8 w-8 h-8 rounded-lg"
                  >
                    <Maximize2 size={12} />
                  </Button>
                </CardFooter>
                
                {/* Overlay Icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
        classNames={{
          base: "bg-transparent shadow-none",
          closeButton: "hover:bg-white/10 active:bg-white/20 text-white p-2",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-0 relative group">
                {selectedImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                  >
                    <img 
                      src={selectedImage.url} 
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1EB2A6] mb-2 block">
                        {selectedImage.category}
                      </span>
                      <h3 className="text-white text-2xl font-black tracking-tight">
                        {selectedImage.title}
                      </h3>
                    </div>
                  </motion.div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Gallery;
