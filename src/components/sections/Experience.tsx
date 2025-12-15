
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(experienceData[0].id);

  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto py-24 px-6 md:px-10 mb-20"
    >
      <SectionHeading number="03" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-auto md:min-h-[300px]">
        {/* Tab List (Left Side) */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-48 border-b md:border-b-0 md:border-l border-navy-600 no-scrollbar">
          {experienceData.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveTabId(job.id)}
              className={cn(
                "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 hover:bg-navy-700 hover:text-gold",
                activeTabId === job.id
                  ? "text-gold bg-navy-800 md:border-l-2 border-b-2 md:border-b-0 border-gold -mb-[2px] md:-mb-0 md:-ml-[2px]"
                  : "text-slate-300"
              )}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content (Right Side) */}
        <div className="flex-1 min-h-[320px]">
          {experienceData.map((job) => {
            if (job.id !== activeTabId) return null;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-slate-100 mb-1">
                  {job.role} <span className="text-gold">@ {job.company}</span>
                </h3>
                <p className="text-sm font-mono text-slate-300 mb-6">
                  {job.period}
                </p>
                <ul className="flex flex-col gap-3">
                  {job.description.map((point, index) => (
                    <li
                      key={index}
                      className="relative pl-6 text-slate-300 text-sm md:text-base leading-relaxed"
                    >
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gold/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}