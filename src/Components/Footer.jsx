import React from "react";
import { Link, Divider } from "@heroui/react";
import { 
  Instagram, 
  Github, 
  Mail, 
  Facebook, 
  Twitter, 
  Dribbble,
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-20 md:pt-24 pb-12 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-black text-[#1EB2A6] tracking-tighter">SI PEKERJA NTT</h2>
              <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em] mt-1">Sistem Penempatan Tenaga Kerja</span>
            </div>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 italic">
              Portal digital untuk pengelolaan, pengarsipan, dan rekapitulasi data penempatan tenaga kerja di wilayah Nusa Tenggara Timur secara modern dan transparan.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-[#1EB2A6] hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Akses Cepat</h4>
            <ul className="space-y-4">
              {["Pusat Data AKAD", "Informasi P3TK", "Layanan OPP", "Dokumen Administrasi"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-[#1EB2A6] font-medium transition-colors flex items-center justify-center lg:justify-start gap-2 group text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EB2A6]/30 group-hover:bg-[#1EB2A6] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="text-[#1EB2A6]"><MapPin size={20} /></div>
                <p className="text-slate-500 font-medium leading-tight text-sm md:text-base">Kantor Dinas Tenaga Kerja dan Transmigrasi Provinsi NTT, Kupang</p>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="text-[#1EB2A6]"><Mail size={20} /></div>
                <p className="text-slate-500 font-medium text-sm md:text-base">kontak@sipekerja-ntt.go.id</p>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="bg-slate-100 dark:bg-slate-900 mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
            © 2026 SI PEKERJA NTT. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-[#1EB2A6] uppercase tracking-[0.3em]">
            <Send size={14} />
            Digitalisasi Tenaga Kerja NTT
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
