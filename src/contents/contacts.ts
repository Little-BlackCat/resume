import email from "../assets/icons/email.png"
import line from "../assets/icons/line.png"
import linkedin from "../assets/icons/linkedin.png"
import github from "../assets/icons/github.png"


interface Contacts {
  name: string;
  img: string;
  link: string;
}

export const contacts: Contacts[] = [
  {
    name: "email",
    img: email,
    link: "",
  },
  {
    name: "line",
    img: line,
    link: "",
  },{
    name: "linkedin",
    img: linkedin,
    link: "",
  },{
    name: "github",
    img: github,
    link: "",
  },
]