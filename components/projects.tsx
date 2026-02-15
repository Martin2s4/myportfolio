"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./motion";

export default function Projects() {
  const projects = [
    {
      title: "AI Chat Platform",
      description:
        "A real-time chat application powered by AI, enabling users to have intelligent conversations with multiple AI models.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "WebSocket",
        "OpenAI API",
      ],
      link: "https://google.com",
      github: "https://github.com/Martin2S4",
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description:
        "Comprehensive analytics dashboard for e-commerce businesses with real-time insights and predictive analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "Socket.io"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Manager",
      description:
        "Multi-platform social media management tool with scheduling, analytics, and content optimization features.",
      tech: ["Next.js", "Python", "Redis", "MongoDB", "AWS"],
      link: "#",
      github: "#",
    },
    {
      title: "Cloud File Storage System",
      description:
        "Secure, scalable cloud storage platform with encryption, sharing capabilities, and collaborative features.",
      tech: ["React", "Express", "PostgreSQL", "S3", "Docker"],
      link: "#",
      github: "#",
    },
    {
      title: "Video Streaming Platform",
      description:
        "HLS-based video streaming platform with adaptive bitrate streaming and interactive live features.",
      tech: ["Next.js", "FFmpeg", "HLS.js", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "ML Model Training Suite",
      description:
        "Web-based suite for training and deploying machine learning models without extensive coding knowledge.",
      tech: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="space-y-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <StaggerContainer staggerChildren={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <Card className="neon-border bg-gradient-to-br from-blue-500/5 to-purple-500/5 overflow-hidden group hover:border-blue-500/80 transition-all duration-300 flex flex-col">
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-blue-500/20">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full text-blue-400 hover:bg-blue-500/20"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 justify-center"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </a>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full text-blue-400 hover:bg-blue-500/20"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 justify-center"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
