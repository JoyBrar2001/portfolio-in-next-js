'use client'

import React, { useRef } from "react";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/theme-context-provider";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <ExperienceCard {...experience} key={index} index={index} />
          )
          )}
      </VerticalTimeline>
    </section>
  )
}

const ExperienceCard = ({ date, icon, title, location, description, index } : { date: string, icon: JSX.Element, title: string, location: string, description: string, index: number}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  
  const { theme } = useTheme();
  
  return (
    <motion.div
      ref={ref}
      key={index}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="py-4"
    >
      <VerticalTimelineElement
        position={index % 2 === 1 ? "right" : "left"}
        visible={true}
        contentStyle={{
          background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={date}
        icon={icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize !text-xl">{title}</h3>
        <p className="font-normal !mt-0 !text-lg">{location}</p>
        <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75">{description}</p>
      </VerticalTimelineElement>
    </motion.div>
  )
}