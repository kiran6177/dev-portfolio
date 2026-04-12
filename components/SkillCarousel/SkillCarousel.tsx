"use client";

import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { skills } from "@/lib/constants/skills.config";
import SkillCard from "../ui/Card/SkillCard";

function SkillCarousel() {
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(40); // px per second

  const loopedSkills = [...skills, ...skills];

  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return;

    x.current -= (speedRef.current * delta) / 1000;

    const halfWidth = containerRef.current.scrollWidth / 2;

    if (Math.abs(x.current) >= halfWidth) {
      x.current = 0;
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div
      className="overflow-hidden"
    >
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max"
      >
        {loopedSkills.map((skill, index) => (
          <SkillCard
            key={index}
            className="min-w-45 md:min-w-55"
            skill={skill.title}
            imageURL={skill.imageURL}
            status={skill.status}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default SkillCarousel;