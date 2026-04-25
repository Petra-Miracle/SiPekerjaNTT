import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

// Import image agar terbaca oleh Vite/React
import bgHero from "../Public/img/Hero Section Photo.jpeg";

const HeroSection = ({ googleDriveUrl }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Diam di tempat (No Parallax) */}
      <div className="absolute inset-0 -z-20">
        <img 
          src={bgHero} 
          alt="Academia Background" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Multilayer Overlay for Premium Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-slate-950/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-32">
        <div className="max-w-4xl space-y-10">
          {/* Animated Badge Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-0.5 bg-[#1EB2A6]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1EB2A6]">
              Selamat Datang di Portal Resmi
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-[900] text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              SI PEKERJA <br />
              <span className="text-[#1EB2A6] relative inline-block">
               NTT
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#1EB2A6]/30 rounded-full"
                />
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium"
          >
            Media digital pengelolaan dan penyimpanan data penempatan tenaga kerja yang berfungsi sebagai pengarsipan data per perusahaan dan rekapitulasi data tenaga kerja secara digital.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-6 pt-6"
          >
            <Button 
              as="a"
              href={googleDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg" 
              className="bg-[#1EB2A6] text-white font-black text-xs uppercase tracking-widest px-10 h-16 rounded-none flex items-center gap-3 group shadow-xl hover:bg-[#19968c] transition-all"
            >
              Akses Data Digital <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <button className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border-2 border-[#1EB2A6]/30 flex items-center justify-center transition-all group-hover:bg-[#1EB2A6] group-hover:border-[#1EB2A6]">
                <Play size={20} className="text-[#1EB2A6] group-hover:text-white fill-current ml-1" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-800 dark:text-white">Pelajari Lebih Lanjut</span>
            </button>
          </motion.div>
        </div>
      </div>
      
      
      
    </section>
  );
};

export default HeroSection;
