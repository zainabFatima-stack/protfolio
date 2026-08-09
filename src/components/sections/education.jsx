"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/shared/container";
import { EducationCard } from "@/components/shared/education-card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="soft" className="mb-3">
            <GraduationCap className="size-3.5" />
            Education
          </Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            My{" "}
            <span className="text-gradient">academic journey</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            My academic background and the foundation behind my
            technical skills.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Gradient timeline spine */}
          <div className="absolute left-[1.375rem] top-0 h-full w-px bg-gradient-to-b from-primary via-[var(--color-chart-2)] to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {education.map((item, index) => (
              <EducationCard
                key={`${item.institution}-${item.degree}`}
                index={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
