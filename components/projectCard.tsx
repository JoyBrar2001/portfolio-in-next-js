'use client'

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

type ProjectCardProps = (typeof projectsData)[number]

export default function ProjectCard({ title, description, tags, projectUrl, imageUrl }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-8 px-4 sm:pl-10 sm:px-0 sm:pt-10 sm:w-1/2 flex flex-col gap-2 h-full group-even:ml-auto">
          <Link 
            href={projectUrl}
            target="_blank"
            className="flex flex-row justify-start items-center gap-1"
          >
            <h3 className="text-2xl font-semibold underline">{title}</h3>
            <div className="text-2xl">
            <CgArrowTopRight />
            </div>
          </Link>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={90}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl 
        group-even:-right-[initial] group-even:-left-40
        group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2
        group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2
        group-hover:scale-105 transition"
        />
      </section>
    </motion.div>
  )
}