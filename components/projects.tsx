"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import ProjectCard from "./projectCard";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 relative">
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



