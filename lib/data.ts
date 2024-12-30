import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";

import mujacmwebsite from "@/public/MUJACMWebsite.png";
import netflixclone from "@/public/NetflixClone.png";
import threadsApp from "@/public/ThreadsApp.png";
import aora from "@/public/Aora.png";
import bankui from "@/public/BankUI.png";
import foodrecipeapp from "@/public/FoodRecipeApp.png";
import iphonelandingpage from "@/public/iPhoneLandingPage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Smollan India",
    description: "Develop and maintain frontend applications using React.js, Next.js, and Tailwind CSS to ensure modern, responsive designs. Integrate APIs and collaborate with design and backend teams to enhance functionality and user experience. Utilize TypeScript for type-safe development and Framer Motion for creating captivating animations, improving overall UI/UX.",
    icon: React.createElement(RiComputerLine),
    date: "05/2024 – 11/2024",
  },
  {
    title: "Software Engineering Intern",
    location: "Clarient Systems Corporation",
    description: "Worked on Node.js Express API application designed to facilitate the management of data for an online test application through APIs. Technologies Used - Next.js 13.4, JavaScript, TypeScript, NoSQL (MongoDB), and Node.js with Express.js.",
    icon: React.createElement(CgWorkAlt),
    date: "05/2023 – 08/2023",
  },
  {
    title: "Web Master",
    location: "Association for Computing Machinery (MUJ ACM)",
    description: "Led all teams of web based operations which included the developement of new websites and mainatance of existing sites. Also Served as Head of Design which included designing of websites , posters and social media handling as well.",
    icon: React.createElement(LuGraduationCap),
    date: "04/2023 - 04/2024",
  },
] as const;

export const projectsData = [
  {
    title: "Threads App",
    description:
      "Developed a Full-Stack social media app with Google and GitHub authentication, allowing users to create, view, like, and comment on threads, and create organizations.",
    tags: ["TypeScript", "Nextjs", "MongoDB", "Clerk Auth", "Tailwind"],
    projectUrl: "https://github.com/JoyBrar2001/Threads-App",
    index: 0,
    imageUrl: threadsApp,
  },
  {
    title: "MUJ ACM Website",
    description:
      "Developed a highly responsive website for our college's technical club, ACM (Association for Computing Machinery), optimized for seamless user experience on mobile and tablet devices.",
    tags: ["React", "Javascript", "Three Js", "Framer Motion", "Tailwind"],
    projectUrl: "https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website",
    index: 1,
    imageUrl: mujacmwebsite,
  },
  {
    title: "iPhone Landing Page",
    description: "Demonstrated expertise in front-end development by delivering a visually stunning and responsive iPhone 15 website optimized for various devices.",
    tags: ["React", "Javascript", "UI/UX", "Tailwind", "gsap", "Three.js"],
    projectUrl: "https://github.com/JoyBrar2001/Apple-3D-Homepage",
    imageUrl: iphonelandingpage,
    index: 2,
  },
  {
    title: "Aora App",
    description: "Aora is an image and video sharing platform built with React Native and the Expo CLI. It offers a seamless and engaging user experience with a variety of features and a robust tech stack.",
    tags: ["React Native", "Javascript", "UI/UX", "Tailwind", "Appwrite"],
    projectUrl: "https://github.com/JoyBrar2001/Aora-react-native",
    imageUrl: aora,
    index: 3,
  },
] as const;

export const skillsData = [
  {
    field: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Redux",
      "React Native",
      "Expo",
    ],
  },
  {
    field: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js Server Actions",
      "Fast API",
      "Rest APIs",
    ],
  },
  {
    field: "Database",
    skills: [
      "MySQL",
      "MongoDB",
      "Mongoose",
      "Prisma",
      "Appwrite",
    ],
  },
  {
    field: "Version Control",
    skills: [
      "Github",
      "Git",
    ],
  },
  {
    field: "Competitive",
    skills: [
      "C++",
      "STL",
      "Python",
      "Data Structures",
      "Algorithms"
    ],
  },
] as const;