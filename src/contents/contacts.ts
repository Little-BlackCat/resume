import email from "../assets/icons/email.png"
import line from "../assets/icons/line.png"
import linkedin from "../assets/icons/linkedin.png"
import github from "../assets/icons/github.png"


interface Contacts {
  name: string;
  img: string;
  link: string;
  icon: string;
}

export const contacts: Contacts[] = [
  {
    name: "email",
    img: email,
    link: "",
    icon: "faEnvelope",
  },
  {
    name: "line",
    img: line,
    link: "",
    icon: "faLine",
  },{
    name: "linkedin",
    img: linkedin,
    link: "",
    icon: "faLinkedin",
  },{
    name: "github",
    img: github,
    link: "",
    icon: "faSquareGithub",
  },
]