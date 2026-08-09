"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardGlow } from "@/components/ui/card";
import { contactSchema } from "@/lib/validations/contact";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors({});
    setStatus("");

    // Frontend validation
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (!newErrors[field]) {
          newErrors[field] = issue.message;
        }
      }

      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Unable to send message.");
        return;
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-2">

          {/* Information */}
          <div>
            <Badge variant="soft">
              <Mail className="size-3.5" />
              Contact
            </Badge>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s work <span className="text-gradient">together</span>.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Have a project, opportunity, or idea you&apos;d
              like to discuss? Send me a message and I&apos;ll
              get back to you.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <CardGlow />
            <form
              onSubmit={handleSubmit}
              className="relative space-y-6"
            >
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Name
              </Label>

              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Message
              </Label>

              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <p className="text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full shadow-lg shadow-primary/20 sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="size-4" />
            </Button>

            {/* Status */}
            {status && (
              <p className="text-sm text-muted-foreground">
                {status}
              </p>
            )}
            </form>
          </Card>

        </div>
      </Container>
    </section>
  );
}