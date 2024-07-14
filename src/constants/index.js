import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { FaCode as Code, FaDatabase as Database } from "react-icons/fa";
import { IoIosCloudy as Cloud_tech } from "react-icons/io";
import {
  GrPersonalComputer as Computer_tech,
  GrTechnology as Tech,
} from "react-icons/gr";
import { SiFramework as Frameworks_and_tools } from "react-icons/si";

export const HERO_CONTENT = `I am a Data Scientist with a passion for transforming data into actionable insights to drive business growth. My expertise includes leveraging advanced Generative Networks, developing robust machine learning models, and crafting insightful data visualizations with dashboards. With over 3 years of hands-on experience, I have honed my skills in optimizing database queries, implementing AI models with PyTorch and TensorFlow, and enhancing data processing performance. I have also worked with Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) techniques to improve data-driven decision-making. My goal is to utilize my expertise to create innovative solutions that deliver exceptional user experiences and drive significant business success.`;

export const ABOUT_TEXT = `I am a passionate and skilled data scientist with a strong background in machine learning, AI, and full-stack development. With professional experience in developing and maintaining machine learning models, creating data visualizations, and optimizing data pipelines, I have worked with technologies like Python, PyTorch, TensorFlow, SQL, React, and MongoDB. My expertise includes synthetic data creation, data analysis, AI model implementation, and enhancing business operations. I am also proficient in CI/CD processes and cloud technologies such as Docker, Kubernetes, and RedHat OpenShift. I enjoy collaborating with teams to solve complex problems and deliver high-quality solutions. Outside of work, I stay active in exploring new technologies and contributing to projects that drive innovation.`;

export const EXPERIENCES = [
  {
    year: "01/2023 - 12/2023",
    city_country: "Germany, Regensburg",
    role: "DATA SCIENTIST (working-student) ",
    company: "INFINEON TECHNOLOGIES",
    description: `Developed and maintained machine learning models, boosting in-house client engagement and speed by more than 60%. Created data visualizations with Matplotlib and Seaborn for better insights and dashboards. Enhanced methods' accuracy using pre-trained Large Language Models (LLMs) API. Optimized SQL queries, reducing response time, and established a seamless data pipeline. Collaborated with a team, ensuring project success and integrating machine learning models with data engineering teams.`,
    technologies: [
      "Python",
      "PyTorch",
      "RAG",
      "SQL",
      "Matplotlib",
      "Seaborn",
      "Data Engineering",
    ],
  },
  {
    year: "05/2019 - 11/2021",
    city_country: "Germany, Erlangen",
    role: "Sydney, Australia",
    company: "DXIGN LAB (remote)",
    description: `Designed and implemented AI models using PyTorch and TensorFlow to boost sales through customer data analysis from APIs. Applied various machine learning techniques for data analysis and sales pattern recognition. Created a Power BI dashboard for AI-driven sales data analysis, improving strategy effectiveness. Extracted and analyzed customer data from APIs using Python to refine AI-based sales strategies. Enhanced forecasting accuracy by 7% with deep learning models improving backend performance. Collaborated with software engineers and team leads using Jira to optimize AI-driven customer interactions, increasing revenue.`,
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "SQL",
      "MongoDB",
      "Power BI",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Jahnstr. 4, 91054 Erlangen, Germany",
  phoneNo: "+491742555647 ",
  email: "asheerali1997@gmail.com",
};

export const TECHNOLOGIES = [
  {
    icon: Code,
    label: "Programming Languages",
    text: "Python | C/C++ | JavaScript | HTML | CSS | Bootstrap",
  },
  {
    icon: Database,
    label: "Database Systems",
    text: "PostgreSQL | MySQL | SQLite | MongoDB",
  },
  {
    icon: Cloud_tech,
    label: "Cloud Stack",
    text: "Docker | Kubernetes | Virtual Machine | RedHat Open Shift",
  },
  {
    icon: Frameworks_and_tools,
    label: "Frameworks and Tools",
    text: "FastAPI | Git | Node.js | VSCode | CI/CD | MATLAB | TABLEAU | PowerBI | Numpy | Pandas | PyTorch | TensorFlow | scikit-learn | OpenCV | Django | React",
  },
  {
    icon: Computer_tech,
    label: "Operating Systems",
    text: "Windows | Linux | MacOS",
  },
  {
    icon: Tech,
    label: "Technologies",
    text: "RESTful APIs | WebSockets | Microservices | GraphQL",
  },
];

export const colors = [
  "text-white",
  "text-red-400",
  "text-sky-400",
  "text-gray-500",
  "text-cyan-400",
  "text-green-400",
];
