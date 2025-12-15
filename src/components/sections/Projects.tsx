
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6 md:px-10 mb-20"
    >
      <SectionHeading number="02" title="Some Things I've Built" />

      <div className="flex flex-col gap-24">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              "relative grid gap-4 md:grid-cols-12 items-center",
             
              index % 2 === 0 ? "text-left" : "text-left md:text-right"
            )}
          >
           
            <div
              className={cn(
                "md:col-span-7 relative h-64 md:h-[400px] w-full rounded shadow-xl overflow-hidden border border-navy-700 group",
                
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
              )}
            >
              
              <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply hover:bg-transparent transition-all duration-500 z-10 cursor-pointer" />
              
              
              <Link href={project.demoUrl} target="_blank">
                <Image 
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0} 
                />
              </Link>
            </div>

           
            <div
              className={cn(
                "z-20 md:col-span-7 flex flex-col justify-center",
                
                index % 2 === 0
                  ? "md:col-start-6 md:items-end" 
                  : "md:col-start-1 md:row-start-1 md:items-start" 
              )}
            >
              <p className="text-gold font-mono text-sm mb-2">Featured Project</p>
              <h3 className="text-slate-100 text-2xl font-bold mb-4 hover:text-gold transition-colors">
                <Link href={project.demoUrl} target="_blank">{project.title}</Link>
              </h3>

              
              <div className="bg-navy-700/95 backdrop-blur-sm p-6 rounded shadow-xl text-slate-300 text-sm md:text-base mb-6 md:w-[120%] leading-relaxed">
                {project.description}
              </div>

              {/* Tech Stack */}
              <ul
                className={cn(
                  "flex flex-wrap gap-4 text-slate-300 font-mono text-xs md:text-sm mb-8",
                  index % 2 === 0 ? "justify-end" : "justify-start"
                )}
              >
                {project.tags.map((tag) => (
                  <li key={tag} className="text-gold/80 whitespace-nowrap">
                    {tag}
                  </li>
                ))}
              </ul>

              
              <div className="flex gap-4 items-center">
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  className="text-slate-300 hover:text-gold transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={22} />
                </Link>
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="text-slate-300 hover:text-gold transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={22} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}