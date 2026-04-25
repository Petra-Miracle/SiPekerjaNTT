import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Home, Search, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1EB2A6]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative"
        >
          <div className="text-[180px] md:text-[250px] font-black text-slate-200 dark:text-slate-800/30 leading-none select-none">
            404
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
              <AlertCircle size={64} className="text-[#1EB2A6]" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Halaman <span className="text-[#1EB2A6]">Tidak Ditemukan</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
            Sepertinya Anda tersesat di ruang digital SIPEKERJA NTT. Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="a"
              href="/"
              size="lg"
              className="bg-[#1EB2A6] text-white font-black text-xs uppercase tracking-widest px-10 h-16 rounded-2xl shadow-xl shadow-[#1EB2A6]/20 flex items-center gap-3 group"
            >
              <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Kembali ke Beranda
            </Button>
            
            <Button
              variant="flat"
              size="lg"
              className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black text-xs uppercase tracking-widest px-10 h-16 rounded-2xl flex items-center gap-3"
              onClick={() => window.history.back()}
            >
              <Search size={18} />
              Cari Halaman Lain
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute hidden md:block w-3 h-3 rounded-full bg-[#1EB2A6]/20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + (i % 3) * 30}%`,
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
