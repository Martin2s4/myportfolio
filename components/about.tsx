"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";

export default function Contact() {
  return (
    <AnimatedSection id="about" className="py-24 px-4 bg-background text-milk">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <StaggerContainer staggerChildren={0.15}>
            <StaggerItem>
              <p className="text-lg text-milk/80 leading-relaxed">
                I'm a passionate software engineer with a deep love for creating
                innovative digital solutions. With expertise in modern web
                technologies, I craft applications that are not just functional
                but delightful to use.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-milk/80 leading-relaxed">
                My journey in tech has taught me that great code is written with
                intention, clarity, and a focus on the user experience. I thrive
                in collaborative environments and am always eager to learn the
                latest technologies.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-milk/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new tech,
                contributing to open-source projects, or experimenting with
                futuristic design patterns.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-2 border-cyan-400/40 bg-background/50 p-8 space-y-6 shadow-neon">
              {/* Experience */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Experience
                </h3>
                <p className="text-3xl font-bold text-milk">5+ Years</p>
                <p className="text-milk/70">in Full Stack Development</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>

              {/* Projects */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Projects
                </h3>
                <p className="text-3xl font-bold text-milk">20+</p>
                <p className="text-milk/70">Successfully Delivered</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-purple-400 to-transparent"></div>

              {/* Clients */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                  Clients
                </h3>
                <p className="text-3xl font-bold text-milk">15+</p>
                <p className="text-milk/70">Satisfied Partners</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
