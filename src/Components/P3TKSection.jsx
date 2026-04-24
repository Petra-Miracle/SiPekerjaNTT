import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, BookOpen } from "lucide-react";
import imgFront from "../Public/img/FOTO DEPAN.jpeg";

const P3TKSection = () => {
  const objectives = [
    "Memberikan bekal pengetahuan dan pemahaman tentang peraturan perundang-undangan di negara tujuan.",
    "Memberikan pemahaman tentang hak dan kewajiban tenaga kerja.",
    "Memberikan informasi mengenai budaya dan adat istiadat setempat.",
    "Memberikan motivasi dan mentalitas yang kuat sebelum bekerja."
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/50" id="p3tk">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#1EB2A6]">
                <Target size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Program Unggulan</span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                P3TK & <span className="text-[#1EB2A6]">OPP</span>
              </h2>
            </div>

            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Perencanaan, Pelatihan, dan Penempatan Tenaga Kerja (P3TK) adalah pilar utama dalam memastikan tenaga kerja NTT memiliki kompetensi yang sesuai dengan kebutuhan pasar kerja global.
            </p>

            <div className="space-y-6">
              <div className="p-8 bg-white dark:bg-slate-800 shadow-xl border-l-4 border-[#1EB2A6]">
                <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                  <Users className="text-[#1EB2A6]" /> Orientasi Pra Pemberangkatan
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  Orientasi Pra Pemberangkatan (OPP) wajib diikuti oleh tenaga kerja sebelum berangkat untuk memberikan pembekalan pengetahuan dan pemahaman yang dilakukan oleh Pejabat Fungsional Pengantar Kerja.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((text, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-[#1EB2A6] mt-1 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-snug">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#1EB2A6] to-blue-600 rounded-3xl rotate-3 absolute inset-0 opacity-10" />
            <div className="aspect-square bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden relative border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center p-12 text-center group">
               <div className="w-full h-full rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#1EB2A6] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <img src={imgFront} alt="FOTO DEPAN" className="w-full h-full object-cover" />
               </div>
               
               <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1EB2A6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default P3TKSection;
