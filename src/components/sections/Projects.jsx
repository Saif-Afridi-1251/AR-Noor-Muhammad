import React, { useState } from 'react'

import SectionTitle from "../common/sectiontitle";
import ProjectCard from "../common/ProjectCard";
import projects from "../../data/projects";

function Projects(){
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? projects.length : 4;
  const toggleProjects = () => setShowAll((prev) => !prev);

  return(

<section
id="projects"
className="max-w-7xl mx-auto px-6 py-32"
>

<SectionTitle

title="Featured Projects"

subtitle="Portfolio"

/>

<div className="grid lg:grid-cols-2 gap-10 mt-10">

{

projects.slice(0, visibleCount).map(project=>(

<ProjectCard

key={project.id}

project={project}

/>

))

}

</div>

{projects.length > 4 && (
  <div className="mt-10 flex justify-center">
    <button
      type="button"
      onClick={toggleProjects}
      className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
    >
      {showAll ? "Show Less Projects" : "Show More Projects"}
    </button>
  </div>
)}

</section>

)

}

export default Projects;