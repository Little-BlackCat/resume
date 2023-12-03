// Import image for ports 

import anime from "../../public/ports/search.png"
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
    img: anime,
    title: "Anime Search",
    link: "https://github.com/Little-BlackCat/search-anime", 
  },
  {
    img: todo,
    title: "Todo",
    link: "https://little-blackcat.github.io/todo-demo/", 
  },
  {
    img: blog,
    title: "Blog Post",
    link: "https://nextjs-blog-project.netlify.app/sign-in", 
  },
]
