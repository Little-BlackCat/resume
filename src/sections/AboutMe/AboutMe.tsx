import Title from "../../components/Title/Title";
import profileImg2 from "../../assets/images/profile2.jpeg";
import cat from "../../assets/images/cat_laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/resume/Resume.pdf"
import Activities from "../../components/Activites/Activities";

const AboutMe = () => {
  return (
    <div className="px-5 md:px-10 xl:px-20 py-36">
      <Title title="About Me" />
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 mx-10 lg:mx-0 gap-16">
        <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] shadow-2xl rounded-full border-success border-4 border-dashed">
          <img
            src={profileImg2}
            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div>

        <div className="flex-1 bg-base rounded-3xl">
          <div className="flex lg:flex-row p-8 lg:p-16">
            <p className="text-sm sm:text-lg xl:text-xl font-medium">
              Highly motivated and dedicated entry-level back-end developer with
              a passion for coding and problem-solving. While lacking a formal
              degree, I have honed my expertise through self-learning and
              hands-on projects, consistently delivering high-quality solutions.
            </p>

            <img
              src={cat}
              alt="cat_working"
              className="hidden lg:block lg:w-[200px] lg:h-[200px] rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center items-center -mt-1 mb-6 xl:-mt-16 xl:justify-start xl:ml-16">
            <button className="bg-danger text-background py-2 px-6 rounded-full lg:text-2xl font-semibold hover:cursor-pointer hover:scale-110 hover: duration-300 mr-4">
              <a href={resume} target="_blank">Download Resume</a>
            </button>
            <div className="text-lg lg:text-3xl text-success rotate-90">
              <FontAwesomeIcon
                icon={faHandPointDown}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
      <Activities />
    </div>
  );
};

export default AboutMe;
