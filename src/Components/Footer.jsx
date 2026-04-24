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
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col">
              <h2 className="text-4xl font-black text-[#1EB2A6] tracking-tighter">SI PEKERJA NTT</h2>
              <span className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mt-1">Sistem Penempatan Tenaga Kerja</span>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md">
              Portal digital untuk pengelolaan, pengarsipan, dan rekapitulasi data penempatan tenaga kerja di wilayah Nusa Tenggara Timur secara modern dan transparan.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-[#1EB2A6] hover:text-white transition-all shadow-sm"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Akses Cepat</h4>
            <ul className="space-y-4">
              {["Pusat Data AKAD", "Informasi P3TK", "Layanan OPP", "Dokumen Administrasi"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-[#1EB2A6] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EB2A6]/30 group-hover:bg-[#1EB2A6] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-[#1EB2A6]"><MapPin size={20} /></div>
                <p className="text-slate-500 font-medium leading-tight">Kantor Dinas Tenaga Kerja dan Transmigrasi Provinsi NTT, Kupang</p>
              </li>
              <li className="flex gap-4">
                <div className="text-[#1EB2A6]"><Mail size={20} /></div>
                <p className="text-slate-500 font-medium">kontak@sipekerja-ntt.go.id</p>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="bg-slate-100 dark:bg-slate-900 mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            © 2026 SI PEKERJA NTT. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-black text-[#1EB2A6] uppercase tracking-[0.3em]">
            <Send size={14} />
            Digitalisasi Tenaga Kerja NTT
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
