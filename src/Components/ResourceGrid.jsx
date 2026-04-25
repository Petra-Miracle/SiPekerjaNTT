import React from "react";
import { Card, CardHeader, CardBody, Chip, Button } from "@heroui/react";
import { FileText, FolderOpen, ArrowRight, Star, ExternalLink, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const ResourceGrid = () => {
  const resources = [
    {
      title: "REKAPITULASI DATA TENAGA KERJA ANTAR KERJA ANTAR DAERAH (AKAD)",
      category: "DATABASE SISTEM",
      count: "Excel Spreadsheet",
      icon: <Database size={32} />,
      desc: "Akses data rekapitulasi tenaga kerja AKAD dalam format digital yang terorganisir dan terstruktur.",
      delay: 0,
      gradient: "from-teal-500/20 via-teal-500/5 to-transparent",
      accent: "#1EB2A6",
      link: import.meta.env.VITE_REKAPITULASI_URL || "https://docs.google.com/spreadsheets/d/1Vl1Wk5m1KjRRV_aWLAk_4C7QWUOV8xSe/edit?gid=473348956#gid=473348956"
    },
    {
      title: "DOKUMEN TENAGA KERJA ANTAR KERJA ANTAR DAERAH (AKAD)",
      category: "CLOUD STORAGE",
      count: "Google Drive Folder",
      icon: <Cloud size={32} />,
      desc: "Pusat penyimpanan dokumen administrasi tenaga kerja AKAD secara sistematis dan aman.",
      delay: 0.1,
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
      accent: "#3B82F6",
      link: import.meta.env.VITE_DOKUMEN_URL || "https://drive.google.com/drive/folders/1ZXou0vBp52PmdjYtnvjZgUlc_v2epOX7"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950" id="data-akad">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1EB2A6]/5 rounded-full blur-[150px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1EB2A6]/10 border border-[#1EB2A6]/20 text-[#1EB2A6]"
          >
            <Star size={14} className="fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sipekerja NTT Portal</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white leading-tight uppercase"
          >
            Akses <span className="text-[#1EB2A6] italic">Data & Dokumentasi</span> Digital
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto italic"
          >
            Digitalisasi administrasi untuk pelayanan yang lebih efisien, responsif, dan terintegrasi di seluruh wilayah Nusa Tenggara Timur.
          </motion.p>
        </div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {resources.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay }}
            >
              <Card 
                className="group relative border-none bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-[32px] md:rounded-[40px] hover:translate-y-[-12px] transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none overflow-hidden h-full border border-white/20 dark:border-slate-800/50"
              >
                {/* Accent Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                
                <CardHeader className="p-6 md:p-10 pb-4 md:pb-6 flex flex-col items-start gap-6 md:gap-8 relative z-10">
                  {/* Category Chip */}
                  <div className="flex justify-between w-full items-center">
                    <Chip 
                      variant="flat" 
                      className="bg-[#1EB2A6]/10 text-[#1EB2A6] font-black text-[8px] md:text-[9px] uppercase tracking-widest px-3 md:px-4 h-6 md:h-7"
                    >
                      {item.category}
                    </Chip>
                    <div className="text-slate-300 dark:text-slate-700 font-black text-3xl md:text-4xl opacity-20 group-hover:opacity-40 transition-opacity italic">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 md:gap-8 w-full">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-white transition-all duration-500 shadow-lg scale-100 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: item.accent }}
                    >
                      {React.cloneElement(item.icon, { size: 28 })}
                    </div>
                    
                    <div className="flex-1 space-y-0.5 md:space-y-1">
                      <p className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Format Dokumen</p>
                      <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-slate-200">
                        {item.count}
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                
                <CardBody className="px-6 md:px-10 pb-6 md:pb-10 pt-0 relative z-10 flex flex-col gap-6 md:gap-8">
                  <h3 className="text-lg md:text-2xl font-black text-slate-800 dark:text-white group-hover:text-[#1EB2A6] transition-colors leading-tight uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  
                  <div className="pt-2 md:pt-4 mt-auto">
                    <Button
                      as="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-14 md:h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-[#1EB2A6] dark:hover:bg-[#1EB2A6] hover:text-white dark:hover:text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 group/btn rounded-xl md:rounded-2xl shadow-xl shadow-slate-200 dark:shadow-none overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                        Klik Untuk Akses
                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </CardBody>

                {/* Decorative Elements */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 transition-all duration-700 group-hover:h-2 md:group-hover:h-3"
                  style={{ backgroundColor: item.accent }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceGrid;
