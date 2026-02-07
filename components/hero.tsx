"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaDocker, FaReact, FaPython, FaAws, FaJsSquare } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiTypescript } from "react-icons/si";

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
  const pathname = usePathname();
  const [icons, setIcons] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const randomPos = () => Math.random() * 80 + 10 + "%";

    const generated = devTools.map(() => ({
      startTop: randomPos(),
      startLeft: randomPos(),
      nextTop: randomPos(),
      nextLeft: randomPos(),
      duration: 12 + Math.random() * 10,
    }));

    setIcons(generated);
    setMounted(true);
  }, [pathname]); // re-run on route change

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden grid-background"
    >
      {/* Floating background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-white/10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl bg-cyan-100/10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl bg-purple-100/10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Roaming developer icons */}
      {mounted &&
        icons.map((pos, index) => {
          const Icon = devTools[index].icon;

          return (
            <motion.div
              key={index}
              className="absolute text-white/80"
              initial={{
                top: pos.startTop,
                left: pos.startLeft,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                top: [pos.startTop, pos.nextTop],
                left: [pos.startLeft, pos.nextLeft],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
            >
              <Icon size={devTools[index].size} />
            </motion.div>
          );
        })}

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div
          key={pathname} // replay animation on route change
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="px-4 py-2 rounded-full border border-white/30 text-milk text-sm font-medium backdrop-blur inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white/90 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Martin here! Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-milk/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Building futuristic web experiences with cutting-edge technologies.
            Turning ideas into elegant, scalable solutions.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-milk/70" />
        </motion.div>
      </div>
    </section>
  );
}
