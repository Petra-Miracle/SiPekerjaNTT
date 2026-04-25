import React, { useState, useEffect } from "react";
import {
  Link,
  Button
} from "@heroui/react";
import { 
  Clock, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Dribbble,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "P3TK", id: "p3tk" },
    { name: "Galeri", id: "gallery" },
    { name: "Data AKAD", id: "data-akad" }
  ];

  return (
    <header className="w-full fixed top-0 z-[100] transition-all duration-500">
      {/* Top Header - Hidden on Scroll or Mobile for cleaner look */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#1EB2A6] text-white overflow-hidden hidden sm:block"
          >
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <Clock size={14} /> <span className="hidden sm:inline">Monday - Friday: 8:00AM - 8:00PM</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Phone size={14} /> <span>+2 392 3929 210</span>
                </div>
              </div>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <Link key={i} href="#" className="text-white hover:scale-125 transition-transform">
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-500 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className={`max-w-7xl mx-auto px-4 md:px-6 rounded-2xl transition-all duration-500 ${isScrolled || isMenuOpen ? "glass-panel shadow-2xl py-3" : "bg-transparent py-4"}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col group cursor-pointer">
              <h1 className={`text-xl md:text-3xl font-black tracking-tighter leading-none transition-colors duration-500 ${isScrolled || isMenuOpen ? "text-[#1EB2A6]" : "text-slate-800 dark:text-white"}`}>
                SI PEKERJA NTT
              </h1>
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-1 transition-colors duration-500 ${isScrolled || isMenuOpen ? "text-slate-400" : "text-[#1EB2A6]"}`}>
                Sistem Penempatan Tenaga Kerja
              </span>
            </div>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`text-xs font-black uppercase tracking-widest transition-all hover:text-[#1EB2A6] relative group ${isScrolled ? "text-slate-600 dark:text-slate-300" : "text-slate-800 dark:text-white"}`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EB2A6] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Skewed Button - Desktop only */}
              <div className="relative group hidden sm:block">
                <div className="absolute inset-0 bg-[#1EB2A6] skew-x-[-15deg] transform transition-all group-hover:scale-105 group-active:scale-95 shadow-lg group-hover:shadow-[#1EB2A6]/40" />
                <button className="relative px-6 py-2.5 text-white font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                  Akses Portal
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled || isMenuOpen ? "text-[#1EB2A6] bg-slate-100 dark:bg-slate-800" : "text-[#1EB2A6] bg-white/20 backdrop-blur-md"}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full px-4 pt-2 pb-8 z-50"
          >
            <div className="glass-panel shadow-2xl rounded-3xl overflow-hidden p-6 space-y-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-black uppercase tracking-[0.1em] text-slate-800 dark:text-white py-3 border-b border-slate-100 dark:border-slate-800 last:border-none flex items-center justify-between group"
                  >
                    {item.name}
                    <div className="w-8 h-8 rounded-full bg-[#1EB2A6]/10 flex items-center justify-center text-[#1EB2A6] group-hover:bg-[#1EB2A6] group-hover:text-white transition-all">
                      <Menu size={14} />
                    </div>
                  </Link>
                ))}
              </div>
              
              <Button 
                className="w-full h-14 bg-[#1EB2A6] text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-[#1EB2A6]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Akses Portal Digital
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
