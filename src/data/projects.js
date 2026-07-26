// const projects = [

import { image } from "framer-motion/client";

// {

// title:"Odoo Platform",

// description:
// "Production ready Odoo Platform using Docker, PostgreSQL and DevOps practices.",

// image:"../../oodo.jpg",

// github:"https://github.com/Saif-Afridi-1251",

// demo:"",

// tech:[
// "Docker",
// "React",
// "Node",
// "PostgreSQL"
// ]

// },

// {

// title:"Grafana Provisioning",

// description:
// "Automated Grafana provisioning with Prometheus dashboards.",

// image:"../../grafana-dashboard-english.png",

// github:"https://github.com/Saif-Afridi-1251",

// demo:"",

// tech:[
// "Grafana",
// "Docker",
// "Prometheus"
// ]

// }

// ]

// export default projects;

// include image for each project



const projects = [
  {
    id: 1,
    title: "Landscape Design Projects",
    category: "Landscape",
    image: "/src/assets/landscape.jfif",
    description:
      "Designed parks, roundabouts, farmhouses, society landscaping, entrances, green belts, and residential lawns across Pakistan.",
    tech: [
      "AutoCAD",
      "SketchUp",
      "Lumion",
      "V-Ray",
    ],
  },

  {
    id: 2,
    title: "Educational Projects",
    category: "Architecture",
    image: "/src/assets/education.jfif" ,
    description:
      "Designed schools, colleges, hospitals, and university buildings in multiple cities of Pakistan.",
    tech: [
      "AutoCAD",
      "SketchUp",
      "Lumion",
    ],
  },

  {
    id: 3,
    title: "Residential Projects",
    image:"/src/assets/home.jfif",
    category: "Residential",
    description:
      "Designed houses, apartments, and farmhouses with modern architectural concepts.",
    tech: [
      "AutoCAD",
      "SketchUp",
      "Lumion",
    ],
  },

  {
    id: 4,
    title: "Commercial Projects",
    category: "Commercial",
    image:"/src/assets/plaza.jfif",
    description:
      "Designed plazas, shopping malls, and mosque projects for commercial clients.",
    tech: [
      "AutoCAD",
      "SketchUp",
      "Lumion",
    ],
  },
];

export default projects;