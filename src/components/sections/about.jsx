"use client";

import { Code2, GraduationCap, Layers, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardGlow } from "@/components/ui/card";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

const currentEducation = education[0];

const stats = [
  {
    icon: Layers,
    value: `${projects.length}+`,
    label: "Projects built",
  },
  {
    icon: Code2,
    value: `${skills.length}+`,
    label: "Technologies",
  },
  {
    icon: GraduationCap,
    value: currentEducation ? "Ongoing" : "—",
    label: currentEducation?.degree ?? "Education",
  },
];

export function About() {
  return (
    <section id="about" className="border-t py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="soft">
            <Sparkles className="size-3.5" />
            About Me
          </Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Building <span className="text-gradient">clean experiences</span>{" "}
            with modern technology.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-5 text-base leading-7 text-muted-foreground"
          >
            <p>
              I&apos;m a frontend developer who enjoys turning ideas into
              responsive and interactive web experiences.
            </p>

            <p>
              I focus on writing clean, maintainable code and creating
              interfaces that are simple, accessible, and enjoyable to use.
            </p>

            <p>
              My current focus is React, Next.js, Tailwind CSS, and modern
              component libraries.
            </p>
          </motion.div>

          {/* Right: highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 hover:glow-ring sm:p-8">
              <CardGlow />
              {currentEducation && (
                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Currently studying
                    </p>
                    <p className="mt-1 font-semibold tracking-tight">
                      {currentEducation.degree}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentEducation.institution} &middot;{" "}
                      {currentEducation.period}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="mx-auto flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <stat.icon className="size-4" />
                    </div>
                    <p className="mt-2 text-lg font-bold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
