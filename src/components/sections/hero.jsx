"use client";

import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  return (
    <section className="relative">
      <BackgroundBeamsWithCollision className="min-h-screen items-center from-background via-background to-muted/40 pt-16 dark:from-background dark:via-background dark:to-muted/10">
        {/* Floating decorative orbs */}
        <div className="pointer-events-none absolute left-[10%] top-1/4 -z-10 size-72 animate-float rounded-full bg-primary/15 blur-3xl" />
        <div
          className="pointer-events-none absolute right-[8%] bottom-1/4 -z-10 size-80 animate-float rounded-full bg-[var(--color-chart-2)]/15 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

        <Container>
          <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
            <div className="max-w-3xl text-center">
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex justify-center"
              >
                <Badge variant="soft" className="border-primary/20 px-4 py-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  Open to new opportunities
                </Badge>
              </motion.div>

              {/* Small intro */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary"
              >
                <Sparkles className="size-4" />
                Frontend Developer
              </motion.p>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                I build modern and{" "}
                <span className="text-gradient">user-focused</span> web
                experiences.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
              >
                I&apos;m a frontend developer passionate about creating
                clean, responsive, and engaging web applications using
                modern technologies.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Button size="lg" className="shadow-lg shadow-primary/20">
                  <Link href="#projects" className="flex items-center gap-1.5">
                    View My Work
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    Download Resume
                    <Download className="size-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="mt-10 flex justify-center"
              >
                <SocialLinks />
              </motion.div>
            </div>
          </div>
        </Container>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
