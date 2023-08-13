import cup from "../assets/icons/mug-hot-solid.svg"
import books from "../assets/icons/book-solid.svg"
import algo from "../assets/icons/diagram-project-solid.svg"
import game from "../assets/icons/dragon-solid.svg"

import anime from "../assets/ports/search.png"
import result from "../assets/ports/result-sumary.jpeg"
import vnl from "../assets/ports/Volleyball_Nations_League_Logo.png"

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

interface Ports {
  img: string;
  title: string;
  link: string;
}

export const ports: Ports[] = [
  {
    img: anime,
    title: "Anime Search",
    link: "https://github.com/Little-BlackCat/search-anime", 
  },
  {
    img: result,
    title: "Result Summary",
    link: "https://github.com/Little-BlackCat/result-summary-component", 
  },
  {
    img: vnl,
    title: "VNL 2023",
    link: "https://github.com/Little-BlackCat/vnl-2023", 
  },
]