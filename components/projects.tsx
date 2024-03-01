import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import ProjectCard from "./projectCard";
import React from "react";

export default function Projects() {
  return (
    <section>
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


