"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardGlow } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function GithubMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  live,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Card className="flex h-full flex-col hover:-translate-y-1.5 hover:glow-ring">
        <CardGlow />
        <div className="relative flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            {!live && (
              <Badge variant="outline" className="shrink-0">
                In progress
              </Badge>
            )}
          </div>

          <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge key={technology} variant="secondary">
                {technology}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" })
                )}
              >
                <GithubMark className="size-4" />
                GitHub
              </Link>
            )}

            {live && (
              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                Live Demo
                <ArrowUpRight />
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
