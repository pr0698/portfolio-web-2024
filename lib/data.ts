import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated from A.K.G.E.C Ghaziabad",
    location: "U.P., India",
    description:
      "I completed my BTech in EEE in just four years and quickly transitioned into the tech world as a front-end developer, harnessing my engineering skills to excel in problem-solving!",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer,Wipro Limited",
    location: "Greater Noida,India",
    description:
      "With 2 years and 7 months of experience as a Front-End Developer at Wipro Limited, I not only honed my expertise in creating engaging user interfaces but also took the initiative to upskill into Full Stack Development, broadening my capabilities and enhancing my problem-solving prowess.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Software Engineer,GloabalLogic",
    location: "Gurugram,India",
    description:
      "I'm currently thriving as a Full Stack Developer, bringing 7 months of hands-on experience to the table. My tech stack is a dynamic blend of React, TypeScript, Zod, Google Apps Script, and Google BigQuery Database. Passionate about crafting seamless user experiences and robust back-end solutions, I transform challenges into opportunities and deliver impactful results!",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Snapme",
    description:
     "Share your moments!An image-sharing app that lets you upload, comment, pin, and download stunning visuals—all while connecting with a creative community. Join the fun!",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    websiteUrl:"https://snapme-pratham.netlify.app/",
    githubUrl: "https://github.com/pr0698/snapme",

  },
  {
    title: "CryptoVerse",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    websiteUrl:"https://cryptoverse-app-pr0698.netlify.app/",
    githubUrl: "https://github.com/pr0698/cryptoproject",
  },
  {
    title: "NetflixGPT",
    description:
      "Crafted a dynamic streaming platform that mirrors the best, featuring a sleek interface, secure authentication, and a vast library powered by TMDB and GPT APIs—built with React, Node, and Firebase for an unbeatable user experience.",
    tags: ["React", "Next.js", "Redux", "Node", "Express","MongoDB","MUI"],
    imageUrl: wordanalyticsImg,
    websiteUrl:"https://github.com/pr0698/netflix-gpt",
    githubUrl: "https://github.com/pr0698/netflix-gpt",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
