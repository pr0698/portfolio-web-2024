"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Engineer</span> with 3+
        years of experience in crafting sleek, responsive UIs using{" "}
        <span className="font-medium">
          React.js, Redux, JavaScript, and Tailwind CSS
        </span>
        . My journey from accounting to coding is fueled by a love for solving
        problems and bringing ideas to life on the web.
      </p>

      <p className="mb-3">
        I've built dynamic interfaces for projects like the Google CQO Dashboard
        and integrated secure solutions with{" "}
        <span className="font-medium">JWT authentication</span>. I thrive on
        clean, maintainable code and love pushing the boundaries of what’s
        possible in web development.
      </p>

      <p>
        When I'm not coding, you’ll find me exploring new skills, from learning
        about <span className="font-medium">history</span> and{" "}
        <span className="font-medium">philosophy</span> to jamming on my
        guitar—or just hanging out with my dog. I'm always up for a challenge
        and ready to dive into the next big thing.
      </p>
    </motion.section>
  );
}
