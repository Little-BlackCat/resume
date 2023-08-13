// Import image for ports 

import anime from "../assets/ports/search.png"
import result from "../assets/ports/result-sumary.jpeg"
import vnl from "../assets/ports/Volleyball_Nations_League_Logo.png"

// Export Ports

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
