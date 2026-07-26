import React from 'react'
import SectionTitle from "../common/sectiontitle";
import SkillCard from "../common/SkillCard";
import skills from '../../data/profskill';

function Profkills(){

return(

<section
id="skills"
className="max-w-7xl mx-auto py-32 px-6"
>

<SectionTitle
title="Professional"
subtitle="MY SKILLS"
/>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

{

skills.map(skill=>(

<SkillCard

key={skill.name}

skill={skill}

/>

))

}

</div>

</section>

)

}

export default Profkills;
