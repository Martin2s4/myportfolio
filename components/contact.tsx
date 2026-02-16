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
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Email failed:", error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center items-center py-28 px-4"
    >
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
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-transparent focus-visible:ring-indigo-400"
            />

            <Input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="bg-transparent focus-visible:ring-indigo-400"
            />

            <Input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-transparent focus-visible:ring-indigo-400"
            />

            <Textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what you're working on…"
              className="bg-transparent min-h-[130px] focus-visible:ring-indigo-400"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full text-base tracking-wide
                         bg-gradient-to-r from-indigo-500 to-cyan-400
                         transition-all duration-300
                         hover:scale-[1.02]
                         hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              {loading
                ? "Sending..."
                : submitted
                  ? "Message Sent Successfully!"
                  : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
