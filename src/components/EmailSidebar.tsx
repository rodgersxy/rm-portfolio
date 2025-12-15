
"use client";

import { motion } from "framer-motion";

export default function EmailSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="hidden md:flex fixed bottom-0 right-10 flex-col gap-6 items-center z-30"
    >
      <a
        href="mailto:mogakaroy@gmail.com"
        className="text-slate-300 hover:text-gold text-sm font-mono writing-vertical hover:-translate-y-1 transition-all duration-300"
        style={{ writingMode: "vertical-rl" }}
      >
        mogakaroy@gmail.com
      </a>
      
     
      <div className="w-[1px] h-24 bg-slate-300 mx-auto" />
    </motion.div>
  );
}