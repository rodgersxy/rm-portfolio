
"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }} 
      className="hidden md:flex fixed bottom-0 left-10 flex-col gap-6 items-center z-30"
    >
      <Link
        href="https://github.com/rodgersxy?tab=repositories"
        target="_blank"
        className="text-slate-300 hover:text-gold hover:-translate-y-1 transition-all duration-300"
      >
        <Github size={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rodgers-dev/"
        target="_blank"
        className="text-slate-300 hover:text-gold hover:-translate-y-1 transition-all duration-300"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        href="mailto:mogakaroy@gmail.com"
        className="text-slate-300 hover:text-gold hover:-translate-y-1 transition-all duration-300"
      >
        <Mail size={20} />
      </Link>
      
      {/* The vertical line */}
      <div className="w-[1px] h-24 bg-slate-300 mx-auto" />
    </motion.div>
  );
}