"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import ProjectCard from "./projectCard";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const {ref, inView} = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => { 
    if(inView){
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="text-center">
        <SectionHeading>My Projects</SectionHeading>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}



