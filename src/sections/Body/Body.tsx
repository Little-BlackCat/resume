import profileImg1 from "../../../public/images/profile1.jpeg";
import Contacts from "../../components/Contacts/Contacts";

import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Body() {
  return (
    <div id="home" className="bg-img bg-center w-full h-auto text-background">
      <div className="backdrop-blur-sm py-20">
        <div className="px-20 xl:px-0 flex flex-col justify-center items-center">
          <div className="w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] mb-12 shadow-2xl rounded-full">
            <img
              src={profileImg1}
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              BANYAWAT YAISINGSON
            </h1>
          </div>

          <div className="text-center">
            <h2 className="text-xl lg:text-3xl font-bold mb-6">
              I am a Back-End Developer
            </h2>
          </div>

          <div className="hidden lg:flex gap-9 mb-6 text-black text-6xl">
            <Contacts />
          </div>

          <div className="text-center mb-6">
            <div className="text-xl font-semibold bg-primary py-2 px-6 rounded-[50px]">
              Welcome
            </div>
          </div>

          <div className="animate-bounce">
            <FontAwesomeIcon icon={faCircleArrowUp} rotation={180} className="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
