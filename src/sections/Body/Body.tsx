import profileImg1 from "../../assets/images/profile1.jpeg";
import Contacts from "../../components/Contacts/Contacts";
import arrow from "../../assets/icons/arrow_up.png"

function Body() {
  return (
    <div className="bg-bg-img bg-center w-full h-auto text-background">
      <div className="backdrop-blur-sm py-20">
        <div className="px-10 xl:px-0 flex flex-col justify-center items-center">
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

          <div className="hidden lg:flex gap-9 mb-6">
            <Contacts />
          </div>

          <div className="text-center mb-6">
            <div className="text-xl font-semibold bg-primary py-2 px-6 rounded-[50px]">Welcome</div>
          </div>

          <div className="w-[30px] animate-bounce bg-background rounded-full">
            <img src={arrow} alt="arrow" className="rotate-180 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
