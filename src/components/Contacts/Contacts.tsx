import {
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  const iconHover: string =
    "hover:cursor-pointer hover:scale-125 hover:duration-300";

  return (
    <>
      <a href="mailto:neko.sword@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className={`${iconHover}`} />
      </a>
      <a href="https://www.linkedin.com/in/banyawat-y" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={`${iconHover}`} />
      </a>
      <a href="https://github.com/Little-BlackCat" target="_blank">
        <FontAwesomeIcon icon={faSquareGithub} className={`${iconHover}`} />
      </a>
    </>
  );
}

export default Contacts;
