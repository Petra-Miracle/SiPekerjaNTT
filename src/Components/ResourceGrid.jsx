import React from "react";
import { Card, CardHeader, CardBody, Chip, Button } from "@heroui/react";
import { FileText, FolderOpen, ArrowRight, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ResourceGrid = () => {
  const resources = [
    {
      title: "REKAPITULASI DATA TENAGA KERJA ANTAR KERJA ANTAR DAERAH (AKAD)",
      count: "Excel Spreadsheet",
      icon: <FileText size={32} />,
      desc: "Akses data rekapitulasi tenaga kerja AKAD dalam format digital yang terorganisir.",
      delay: 0,
      gradient: "from-teal-500/10 to-transparent",
      link: import.meta.env.VITE_REKAPITULASI_URL || "#"
    },
    {
      title: "DOKUMEN TENAGA KERJA ANTAR KERJA ANTAR DAERAH (AKAD)",
      count: "Google Drive Folder",
      icon: <FolderOpen size={32} />,
      desc: "Pusat penyimpanan dokumen administrasi tenaga kerja AKAD secara sistematis.",
      delay: 0.1,
      gradient: "from-blue-500/10 to-transparent",
      link: import.meta.env.VITE_DOKUMEN_URL || "#"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30" id="data-akad">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1EB2A6]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section from Image */}
        <div className="text-center mb-24 space-y-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[#1EB2A6]"
          >
            <Star size={16} className="fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sipekerja NTT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black italic text-slate-800 dark:text-white leading-relaxed"
          >
            Digitalisasi data administrasi calon tenaga kerja memberikan kemudahan dalam pengelolaan, akses yang lebih cepat, serta menjamin keamanan informasi
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl italic text-slate-500 dark:text-slate-400 font-medium"
          >
            SIPEKERJA NTT mendukung pelayanan yang lebih efisien, responsif, dan terintegrasi
          </motion.p>
        </div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {resources.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay }}
            >
              <Card 
                className="group border-none bg-white dark:bg-slate-900 rounded-3xl hover:translate-y-[-10px] transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden h-full"
              >
                {/* Decorative Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <CardHeader className="p-12 flex flex-col items-start gap-8 relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#1EB2A6] group-hover:bg-[#1EB2A6] group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <Chip 
                      size="sm" 
                      variant="flat" 
                      className="bg-[#1EB2A6]/10 text-[#1EB2A6] font-black text-[9px] uppercase tracking-widest px-4"
                    >
                      {item.count}
                    </Chip>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white group-hover:text-[#1EB2A6] transition-colors leading-tight uppercase">
                      {item.title}
                    </h3>
                  </div>
                </CardHeader>
                
                <CardBody className="px-12 pb-12 pt-0 relative z-10 flex flex-col gap-8">
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  
                  <Button
                    as="a"
                    href={item.link}
                    target="_blank"
                    className="w-full h-14 bg-slate-100 dark:bg-slate-800 hover:bg-[#1EB2A6] text-slate-600 dark:text-slate-300 hover:text-white font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 group/btn rounded-xl shadow-sm"
                  >
                    Click Here
                    <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardBody>

                {/* Progress Bar at bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#1EB2A6] transition-all duration-700 group-hover:w-full" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceGrid;
