"use client";

import { GraduationCap, Landmark, School } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardGlow } from "@/components/ui/card";

const levelIcon = {
  university: GraduationCap,
  college: Landmark,
  school: School,
};

export function EducationCard({
  institution,
  degree,
  period,
  level,
  description,
  highlights = [],
  index = 0,
}) {
  const Icon = levelIcon[level] ?? GraduationCap;
  const isOngoing = /present/i.test(period);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-16 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
    >
      {/* Timeline node */}
      <span className="absolute left-0 top-1 flex size-11 items-center justify-center rounded-full border bg-card shadow-sm shadow-primary/10 md:left-1/2 md:-translate-x-1/2">
        <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[var(--color-chart-2)] text-primary-foreground">
          <Icon className="size-4" />
        </span>
        {isOngoing && (
          <span className="absolute -right-0.5 -top-0.5 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-chart-3)] opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-[var(--color-chart-3)]" />
          </span>
        )}
      </span>

      {/* Spacer keeps the card on the correct side of the center line on desktop */}
      <div className={isLeft ? "md:order-1" : "md:order-2"} />

      <Card
        className={`hover:-translate-y-1 hover:glow-ring ${
          isLeft ? "md:order-2 md:text-left" : "md:order-1 md:text-right"
        }`}
      >
        <CardGlow />
        <div className="relative p-6 sm:p-7">
          <div
            className={`flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between ${
              isLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {degree}
              </h3>
              <p className="mt-1 font-medium text-primary">{institution}</p>
            </div>

            <Badge variant={isOngoing ? "gradient" : "soft"}>
              {isOngoing ? "In progress" : "Completed"}
            </Badge>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">{period}</p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          {highlights.length > 0 && (
            <div
              className={`mt-5 flex flex-wrap gap-2 ${
                isLeft ? "" : "md:justify-end"
              }`}
            >
              {highlights.map((highlight) => (
                <Badge key={highlight} variant="secondary">
                  {highlight}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
