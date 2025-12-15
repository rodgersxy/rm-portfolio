"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled
          ? "h-16 bg-navy-900/80 backdrop-blur-md shadow-lg shadow-navy-900/20"
          : "h-24 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-gold text-sm font-medium transition-colors relative group"
            >
              <span className="text-gold mr-1 font-mono text-xs">0{index + 1}.</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
          {/* <Link
            href="/resume.pdf"
            target="_blank"
            className="border border-gold text-gold px-4 py-2 rounded text-sm font-mono hover:bg-gold/10 transition-colors"
          >
            Resume
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-navy-800 z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-slate-300 hover:text-gold font-medium transition-colors"
                >
                  <span className="text-gold font-mono text-lg block text-center mb-1">
                    0{index + 1}.
                  </span>
                  {link.name}
                </Link>
              ))}
              {/* <Link
                href="/resume.pdf"
                className="mt-4 border border-gold text-gold px-8 py-3 rounded text-lg font-mono hover:bg-gold/10 transition-colors"
              >
                Resume
              </Link> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}