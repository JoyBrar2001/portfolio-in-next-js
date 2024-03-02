'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 mx-auto scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0}}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/JoyBrarWebmaster.png"
              alt="Joy Brar"
              height={100}
              width={100}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span 
            className="absolute right-0 bottom-0 text-4xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
        <span className="font-bold">Hello, I&apos;m Joy Brar.</span>
        {" "}I&apos;m a{" "}
        <span className="font-bold">Front-End Developer</span>
        {" "}currently pursuing my{" "}
        <span className="font-bold">Computer Science</span>
        {" "}degree at{" "} 
        <span className="italic">Manipal University Jaipur</span>. 
        {" "}My focus is{" "}
        <span className="underline">React.js (Next.js)</span>.
      </motion.h1>

      <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link 
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a 
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-110 hover:scale-110 active:scale-105 transition group dark:bg-white/10"
          href="/JoyBrarCV.pdf" 
          download 
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-110 hover:text-gray-950 transition dark:bg-white/10 dark:text-white/60">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-110 hover:text-gray-950 transition dark:bg-white/10 dark:text-white/60">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
