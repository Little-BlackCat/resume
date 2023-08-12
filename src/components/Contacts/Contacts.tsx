
import {
  faLine,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {

  const iconHover:string = "hover:cursor-pointer hover:scale-125 hover:duration-300"

  return (
    <>
      <FontAwesomeIcon icon={faEnvelope} className={`${iconHover}`} />
      <FontAwesomeIcon icon={faLine} className={`${iconHover}`} />
      <FontAwesomeIcon icon={faLinkedin} className={`${iconHover}`} />
      <FontAwesomeIcon icon={faSquareGithub} className={`${iconHover}`} />
    </>
  );
}

export default Contacts;
