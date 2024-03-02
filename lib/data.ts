import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import mujacmwebsite from "@/public/MUJACMWebsite.png";
import netflixclone from "@/public/NetflixClone.png";
import bankui from "@/public/BankUI.png";
import foodrecipeapp from "@/public/FoodRecipeApp.png";

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
    title: "Software Engineering Intern",
    location: "Clarient Systems Corporation",
    description: "Worked on Node.js Express API application designed to facilitate the management of data for an online test application through APIs. Technologies Used - Next.js 13.4, JavaScript, TypeScript, NoSQL (MongoDB), and Node.js with Express.js.",
    icon: React.createElement(LuGraduationCap),
    date: "05/2023 – 08/2023",
  },
  {
    title: "Web Master",
    location: "Association for Computing Machinery (MUJ ACM)",
    description: "Led all teams of web based operations which included the developement of new websites and mainatance of existing sites. Also Served as Head of Design which included designing of websites , posters and social media handling as well.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Full Stack Netflix Clone",
    description:
    "Developed a high-fidelity Netflix clone with Google and Github auth, showcasing mastery in full-stack web development.",
    tags: ["TypeScript", "Nextjs", "MongoDB", "NextAuth", "Tailwind", "Prisma" ],
    imageUrl: netflixclone,
  },
  {
    title: "MUJ ACM Website",
    description:
      "Developed a highly responsive website for our college's technical club, ACM (Association for Computing Machinery), optimized for seamless user experience on mobile and tablet devices.",
    tags: ["React", "Javascript", "Three Js", "Framer Motion", "Tailwind"],
    imageUrl: mujacmwebsite,
  },
  {
    title: "Modern Bank UI",
    description: "The project showcases a modern, responsive, and visually compelling website, emphasizing my proficiency in frontend technologies.",
    tags: ["React", "Javascript", "UI/UX", "Tailwind", "Framer"],
    imageUrl: bankui,
  },
  {
    title: "Native Movies App",
    description: "Designed and developed a dynamic food recipe app in React Native, seamlessly integrating animations and leveraging TheMealDB API for a diverse culinary experience.",
    tags: ["React Native", "Javascript", "UI/UX", "Tailwind", "Axios"],
    imageUrl: foodrecipeapp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
  "DSA",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "MySQL",
  "MongoDB",
  "Redux",
  "Express.js",
  "React Native",
  "Expo",
] as const;