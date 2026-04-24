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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-[100] transition-all duration-500">
      {/* Top Header - Hidden on Scroll for cleaner look */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#1EB2A6] text-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <Clock size={14} /> <span>Monday - Friday: 8:00AM - 8:00PM</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Phone size={14} /> <span>+2 392 3929 210</span>
                </div>
              </div>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Dribbble].map((Icon, i) => (
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
        <div className={`max-w-7xl mx-auto px-6 rounded-2xl transition-all duration-500 ${isScrolled ? "glass-panel shadow-2xl py-3" : "bg-transparent py-4"}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col group cursor-pointer">
              <h1 className={`text-3xl font-black tracking-tighter leading-none transition-colors duration-500 ${isScrolled ? "text-[#1EB2A6]" : "text-slate-800"}`}>
                SI PEKERJA NTT
              </h1>
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] mt-1 transition-colors duration-500 ${isScrolled ? "text-slate-400" : "text-[#1EB2A6]"}`}>
                Sistem Penempatan Tenaga Kerja
              </span>
            </div>

            {/* Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {[
                { name: "Home", id: "home" },
                { name: "P3TK", id: "p3tk" },
                { name: "Galeri", id: "gallery" },
                { name: "Data AKAD", id: "data-akad" }
              ].map((item) => (
                <Link 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`text-xs font-black uppercase tracking-widest transition-all hover:text-[#1EB2A6] relative group ${isScrolled ? "text-slate-600" : "text-slate-800"}`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EB2A6] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Skewed Button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#1EB2A6] skew-x-[-15deg] transform transition-all group-hover:scale-105 group-active:scale-95 shadow-lg group-hover:shadow-[#1EB2A6]/40" />
              <button className="relative px-8 py-3.5 text-white font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                Akses Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
