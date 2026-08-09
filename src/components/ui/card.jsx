import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group/card relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}

function CardGlow({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100",
        "bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,0%),color-mix(in_oklch,var(--primary),transparent_85%),transparent_70%)]",
        className
      )}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div data-slot="card-content" className={cn("p-6 pt-0", className)} {...props} />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardGlow,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
