"use client";

import { FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/shared/container";
import { ProjectCard } from "@/components/shared/project-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t py-24 sm:py-32">
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
            <FolderGit2 className="size-3.5" />
            Projects
          </Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve <span className="text-gradient">built</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            A selection of projects that demonstrate my development skills
            and experience.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
