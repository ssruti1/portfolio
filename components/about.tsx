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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">I am a B. tech candidate pursuing Computer Science and Engineering at Vellore Institute of 
        Technology , Bhopal, India.</span> I'm a self-taught web developer with experience in designing new features from ideation 
        to production. I take into consideration the user experience while writing reusable and efficient code. I passionately 
        combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.
        <span className="font-medium">
        I am very creative and innovative individual
        </span>
        who loves to explore new dimensions of technology. A quick learner who is ready to put the skills and 
        knowledge to good use for the development of an organization.
        </p> 

        <p > <span className="font-bold"> After graduating</span>   with a degree in<span className="font-bold"> Computer Science,</span> I want to continue my passion 
        in technology,My core skills are Java, Python, React, Next.js, Node.js, and MongoDB. I am also familiar 
        with TypeScript and C++, I am looking forward to work with great dedication for the growth of the 
        organization and self as a professional in software development.
      </p>

      <p>
        <span className="font-medium">When I'm not coding</span>, I play games with my friends, 
        watch some show on Netflix, or if the weather's good, go for a walk!
      </p>
    </motion.section>
  );
}
