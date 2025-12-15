
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto py-24 px-6 md:px-10 text-center mb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gold font-mono mb-4 text-lg">04. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-12">
          I am currently looking for new opportunities. Whether you have a question, 
          a project proposal, or just want to say hi, I&apos;ll get back to you as soon as I can!
        </p>
        
        <a
          href="mailto:mogakaroy@gmail.com" 
          className="inline-block border-2 border-gold text-gold py-4 px-10 rounded text-sm font-mono hover:bg-gold/10 transition-all duration-300 hover:-translate-y-1"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}