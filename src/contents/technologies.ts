// Import image for technologies

import frontend from "../assets/icons/frontend1.png"
import backend from "../assets/icons/backend.png"
import database from "../assets/icons/database.png"
import tools from "../assets/icons/tools.png"

// Export technologies

interface Technologies {
  title: string;
  tech: string[];
  icon: string;
}

export const technologies:Technologies[] = [
  {
    title: "front-end",
    tech: ["html", "css", "tailwind", "react"],
    icon: frontend,
  },
  {
    title: "back-end",
    tech: ["javascrip", "python", "go", "nodejs", "express"],
    icon: backend,
  },
  {
    title: "database",
    tech: ["postgresql", "mongodb"],
    icon: database,
  },
  {
    title: "tools",
    tech: ["vs code", "git", "github"],
    icon: tools,
  },
]