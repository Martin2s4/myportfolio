"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",

      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",

      skills: [
        "Node.js",
        "Express",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "MySQL",
      ],
    },
    {
      title: "Tools & DevOps",

      skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Linux", "CRUD"],
    },
    {
      title: "Design & UI/UX",

      skills: [
        "Figma",
        "Canva",
        "Responsive Design",
        "Accessibility",
        "Animation",
        "UI Libraries",
        "Web Performance",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="space-y-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <StaggerContainer staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <Card className="neon-border bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-8 hover:border-blue-500/80 transition-all duration-300 group h-full">
                  <motion.div
                    className="space-y-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      ></motion.span>
                      <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium hover:border-blue-500/70 hover:bg-blue-500/10 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
