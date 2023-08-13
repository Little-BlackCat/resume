import { useEffect, useState } from "react";
import catLogo from "../../assets/icons/cat_logo.jpeg";
import menu from "../../assets/icons/menu.png";
import Menu from "../../components/Menu/Menu";

function Navbar() {
  const [hidden, setHidden] = useState<string>("hidden");

  function toggleMenu() {
    return hidden === "hidden" ? setHidden("block") : setHidden("hidden");
  }

  function handleResize() {
    if (window.innerWidth <= 1024) {
      setHidden("hidden");
    } else {
      setHidden("flex");
    }
  }

  useEffect(() => {
    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial hidden state based on the window width
    handleResize();

    // Remove the resize event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen bg-primary text-base sticky top-0 z-10 py-4 px-8 lg:px-10  border-b-2 border-base xl:px-28">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img
            src={catLogo}
            alt="logo"
            className="w-[60px] h-[60px] rounded-full sm:w-[80px] sm:h-[80px] hover:cursor-pointer"
          />
          <h1 className="japanese text-5xl hover:cursor-pointer hover:scale-125 hover:duration-300">
            クロネコ
          </h1>
        </div>
        <div className="relative">
          <img
            src={menu}
            alt="menu"
            onClick={toggleMenu}
            className="w-[60px] h-[60px] hover:cursor-pointer hover:scale-125 hover:duration-300 sm:w-[80px] sm:h-[80px] lg:hidden"
          />
          <Menu status={hidden} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
