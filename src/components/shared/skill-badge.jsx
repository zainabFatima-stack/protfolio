"use client";

import { motion } from "motion/react";

const categoryColor = {
  Language: "var(--color-chart-1)",
  Frontend: "var(--color-chart-2)",
  Styling: "var(--color-chart-3)",
  "State Management": "var(--color-chart-4)",
  Tools: "var(--color-chart-5)",
};

export function SkillBadge({ name, category, index = 0 }) {
  const dot = categoryColor[category] ?? "var(--color-primary)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border bg-card px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent"
    >
      <span
        className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: dot }}
      />
      <div className="flex items-center gap-2">
        <span
          className="size-2 shrink-0 rounded-full"
          style={{ backgroundColor: dot }}
        />
        <p className="font-medium">{name}</p>
      </div>

      <p className="mt-1 text-xs text-muted-foreground">{category}</p>
    </motion.div>
  );
}
