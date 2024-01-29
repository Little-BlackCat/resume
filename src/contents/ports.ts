// Import image for ports 

import home_service from "../../public/ports/Admin_Login.png"
import todo from "../../public/ports/Todo.png"
import tekken8 from "../../public/ports/tekken_8_page.png"

// Export Ports

interface Ports {
  img: string;
  title: string;
  link: string;
}

export const ports: Ports[] = [
  {
    img: home_service,
    title: "Home Service",
    link: "https://home-service-admin.onrender.com/", 
  },
  {
    img: todo,
    title: "Todo",
    link: "https://little-blackcat.github.io/todo-demo/", 
  },
  {
    img: tekken8,
    title: "Tekken 8 Character Details",
    link: "https://tekken-8-homepage.vercel.app/",
  },
]
