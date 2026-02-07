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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:text-cyan-400 transition"
        >
          &lt;Martin /&gt;
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="outline"
              className="
                relative overflow-hidden border border-cyan-400/40
                bg-background/30 backdrop-blur
                hover:text-white
                transition-all duration-300
                hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
                hover:border-cyan-300
                group px-4
              "
            >
              <Link href={item.href}>
                <span className="relative z-10">{item.label}</span>

                {/* Neon hover sweep */}
                <span
                  className="
                    absolute inset-0
                    translate-x-[-100%]
                    bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent
                    group-hover:translate-x-[100%]
                    transition-transform duration-700
                  "
                />
              </Link>
            </Button>
          ))}

          {/* CTA Button */}
          <Button
            variant="outline"
            className="
              ml-2 border-cyan-400/40
              hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
            "
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Button
              variant="outline"
              className="w-full border-cyan-400/40"
              asChild
            >
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
