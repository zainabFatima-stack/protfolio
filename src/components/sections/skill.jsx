"use client";

import { Wrench } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/shared/container";
import { SkillBadge } from "@/components/shared/skill-badge";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t py-24 sm:py-32">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="soft" className="mb-3">
            <Wrench className="size-3.5" />
            Skills
          </Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I <span className="text-gradient">work with</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            A collection of technologies and tools I use to build modern web
            applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              category={skill.category}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
