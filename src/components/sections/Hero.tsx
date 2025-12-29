
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
   
    <section className="min-h-screen flex flex-col justify-center px-6 pt-32 md:pt-0 md:px-28 lg:px-32 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="text-gold font-mono text-base md:text-lg mb-5 block">
          Hi, my name is
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-slate-100 text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Rodgers Mogaka.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-slate-300 text-4xl md:text-6xl font-bold tracking-tight mb-6">
          I build things for the web.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-xl"
      >
        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          I am a software developer specializing in building exceptional digital
          experiences. Currently, I am focused on building accessible,
          human-centered products using{" "}
          <span className="text-gold">, PHP (Laravel)</span>
          <span className="text-gold">, Python</span>
          <span className="text-gold">, TypeScript</span>
          <span className="text-gold">, React (Next.js)</span>
          <span className="text-gold">, Tailwind CSS</span> {" "}
           and{" "}
          <span className="text-gold">React Native</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          href="#projects"
          className="inline-block border border-gold text-gold py-4 px-10 rounded text-sm font-mono hover:bg-gold/10 transition-all duration-300"
        >
          Check out my work
        </Link>
      </motion.div>
    </section>
  );
}