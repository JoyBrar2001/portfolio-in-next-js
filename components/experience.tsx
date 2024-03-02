'use client'

import React, { useEffect, useRef } from "react";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection]);

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
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={date}
        icon={icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{title}</h3>
        <p className="font-normal !mt-0">{location}</p>
        <p className="!mt-1 !font-normal text-gray-700">{description}</p>
      </VerticalTimelineElement>
    </motion.div>
  )
}