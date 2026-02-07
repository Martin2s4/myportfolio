"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md neon-border border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold animate-glow text-blue-500"
        >
          &lt;Martin /&gt;
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex neon-border cursor-pointer"
          asChild
        >
          <a href="#contact">Get In Touch</a>
        </Button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md neon-border border-t">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" className="w-full neon-border" asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
