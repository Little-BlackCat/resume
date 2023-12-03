// Import image for ports 

import home_service from "../../public/ports/Admin_Login.png"
import todo from "../../public/ports/Todo.png"
import blog from "../../public/ports/blog.png"

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
    img: blog,
    title: "Blog Post",
    link: "https://github.com/Little-BlackCat/nextjs-blog", 
  },
]
