'use client'

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex flex-col gap-6">
        {skillsData.map((category) => (
          <div key={category.field} className="flex flex-col max-md:divide-y-4 md:divide-x-4 md:flex-row justify-center items-center divide-black/10 dark:divide-white/10">
            <motion.h1
              className="w-1/5 text-xl font-semibold text-center py-6"
                  variants={fadeInAnimationsVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
            >
              {category.field}
            </motion.h1>
            <ul className="w-4/5 pl-6 flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-md:pt-10">
              {category.skills.map((skill, index) => (
                <motion.li
                  className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationsVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
