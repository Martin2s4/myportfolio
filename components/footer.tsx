"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayName = days[today.getDay()];

  return (
    <footer className="border-t neon-border py-12 px-4 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              &lt;Martin /&gt;
            </h3>
            <p className="text-milk/70 text-sm">
              Building futuristic web experiences, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-milk mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-milk/70">
              <li>
                <a
                  href="#hero"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-milk mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-milk/70">
              <li className="flex items-center gap-2">
                <Github className="w-4 h-4 text-milk/70" />
                <a
                  href="https://github.com/Martin2s4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-milk/70" />
                <a
                  href="https://www.linkedin.com/in/martin-mulinge-993135318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-milk/70" />
                <a
                  href="https://x.com/kimemia_tu?t=LLCHhglk5j4jok2avZa2PA&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-milk/70" />
                <a
                  href="mailto:mulingejackson937@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-milk/70">
            <p>&copy; {currentYear} Martin Jackson. All rights reserved.</p>

            <div>Have a great {dayName}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
