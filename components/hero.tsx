"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaDocker, FaReact, FaPython, FaAws, FaJsSquare } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiTypescript } from "react-icons/si"; // corrected SiCplusplus

const devTools = [
  { icon: FaDocker, size: 40 },
  { icon: FaPython, size: 40 },
  { icon: FaReact, size: 40 },
  { icon: FaJsSquare, size: 40 },
  { icon: FaAws, size: 40 },
  { icon: SiCplusplus, size: 40 },
  { icon: SiNextdotjs, size: 40 },
  { icon: SiTypescript, size: 40 },
];

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden grid-background"
    >
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl bg-white/10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl bg-cyan-100/10"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl bg-purple-100/10"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Developer Icons */}
      {devTools.map((tool, index) => {
        const Icon = tool.icon;
        const top = Math.random() * 80 + 10 + "%";
        const left = Math.random() * 80 + 10 + "%";
        const duration = 5 + Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute text-white/80"
            style={{ top, left }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Icon size={tool.size} />
          </motion.div>
        );
      })}

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome Badge */}
          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="inline-block cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-4 py-2 rounded-full border border-white/30 text-milk text-sm font-medium backdrop-blur">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white/90 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Martin here! Full Stack Developer
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-milk/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building futuristic web experiences with cutting-edge technologies.
            Turning ideas into elegant, scalable solutions.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="neon-border text-milk cursor-pointer"
              variant="outline"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border text-milk"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-milk/70" />
        </motion.div>
      </div>
    </section>
  );
}
