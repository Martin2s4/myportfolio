"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // later: send to API route
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center items-center py-28 px-4"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/10 via-transparent to-cyan-400/10 blur-3xl" />

      <Card className="w-full max-w-lg bg-background/70 backdrop-blur border-primary/20 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl tracking-tight">
            We're Debugging the Future!
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Have an idea, a project, or just want to say hi? I’m always open to
            talking code, products, and possibilities.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              required
              placeholder="Your name"
              className="bg-transparent focus-visible:ring-indigo-400"
            />
            <Input
              required
              placeholder="Phone number"
              className="bg-transparent focus-visible:ring-indigo-400"
            />

            <Input
              required
              type="email"
              placeholder="Your email"
              className="bg-transparent focus-visible:ring-indigo-400"
            />

            <Textarea
              required
              placeholder="Tell me what you're working on…"
              className="bg-transparent min-h-[130px] focus-visible:ring-indigo-400"
            />

            <Button
              type="submit"
              className="w-full rounded-full text-base tracking-wide
                         bg-gradient-to-r from-indigo-500 to-cyan-400
                         transition-all duration-300
                         hover:scale-[1.02]
                         hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              {submitted ? "Message Sent Successfully!" : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
