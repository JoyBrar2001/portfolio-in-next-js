'use client';

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hey there! I&apos;m Joy, a final-year{" "} 
        <span className="font-medium">Computer Science and Engineering</span> 
        {" "}student at{" "}
        <span className="italic">Manipal University Jaipur</span>
        , deeply passionate about crafting seamless digital experiences. With a solid foundation in Frontend technologies like{" "}
        <span className="font-medium">React.js, Next.js, and React Native</span>
        , as well as backend expertise using{" "}
        <span className="font-medium">Node.js and MongoDB</span>
        , I&apos;ve contributed to a variety of projects ranging from website revamps to cross-platform app development.
      </p>
      <p className="mb-3">
        As a Frontend Developer at{" "}
        <span className="font-medium">Smollan</span>
        , I develop and maintain frontend applications using{" "}
        <span className="font-medium">React.js, Next.js, and Tailwind CSS</span>
        {" "}to ensure modern, responsive designs. I integrate APIs and collaborate with design and backend teams to enhance functionality and user experience. Utilizing{" "}
        <span className="font-medium">TypeScript</span>
        {" "}for type-safe development and{" "}
        <span className="font-medium">Framer Motion</span>
        {" "}for creating captivating animations, I aim to improve overall UI/UX.
      </p>
      <p className="mb-3">
        From leading web operations as a{" "}
        <span className="font-medium">Web Master</span>
        {" "}for{" "}
        <span className="font-medium">MUJ ACM</span>
        {" "}(
        <span className="italic underline">Association for Computing Machinery</span>
        ) to my stint as a Software Engineering Intern at{" "}
        <span className="font-medium">Clarient Systems Corporation</span>
        , I&apos;ve gained valuable hands-on experience in building robust, user-centric solutions.
      </p>
      <p>
        I thrive on innovation and am dedicated to leveraging technology to create impactful solutions that make a difference. Let&apos;s connect and create something amazing together!
      </p>
    </motion.section>
  )
}
