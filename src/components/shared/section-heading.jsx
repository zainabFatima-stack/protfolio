export function SectionHeading({
  eyebrow,//small text above heading
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}