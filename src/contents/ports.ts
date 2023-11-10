// Import image for ports 

import anime from "../../public/ports/search.png"
import todo from "../../public/ports/Todo.png"
import vnl from "../../public/ports/Volleyball_Nations_League_Logo.png"

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
    img: todo,
    title: "Todo",
    link: "https://github.com/Little-BlackCat/todo-demo", 
  },
  {
    img: vnl,
    title: "VNL 2023",
    link: "https://github.com/Little-BlackCat/vnl-2023", 
  },
]
