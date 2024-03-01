'use client'

import { links } from "@/lib/data"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"

export default function Header() {
  const [activeSection, setActiveSection] = useState('Home');
  const [left, setLeft] = useState(0);
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      >
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[-0.1rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 relative">
            {links.map((link, index) => (
              <motion.li
                className="h-3/4 items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                    {
                      "text-gray-950": activeSection === link.name,
                    })}
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                  <AnimatePresence>
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-200 rounded-full absolute inset-0 top-1 -bottom-1 -z-10"
                        layoutId="activea"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}
