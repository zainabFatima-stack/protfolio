import { socialLinks } from "@/data/social-links";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target={social.name === "Email" ? undefined : "_blank"}
          rel={
            social.name === "Email"
              ? undefined
              : "noopener noreferrer"
          }
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}