// Import image for activities

import cup from "../assets/icons/mug-hot-solid.svg"
import books from "../assets/icons/book-solid.svg"
import algo from "../assets/icons/diagram-project-solid.svg"
import game from "../assets/icons/dragon-solid.svg"

// Export Activities

interface Activites {
  icon: string;
  amount: number;
  title: string;
}

export const activites: Activites[] = [
  {
    icon: cup,
    amount: 223,
    title: "cup of coffee",
  },
  {
    icon: books,
    amount: 23,
    title: "Books",
  },
  {
    icon: algo,
    amount: 28,
    title: "Algorithm",
  },
  {
    icon: game,
    amount: 3234,
    title: "MOBA Game",
  },
]
