// Import image for technologies

import frontend from "../../public/icons/frontend1.png"
import backend from "../../public/icons/backend.png"
import database from "../../public/icons/database.png"
import tools from "../../public/icons/tools.png"

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
    tech: ["javascrip", "python", "nodejs", "express"],
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