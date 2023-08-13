import arrow from "../../../public/icons/arrow_up.png";

function Arrow() {
  return (
    <div className="flex justify-end absolute bottom-10 right-10 hover:scale-125 duration-300">
      <a href="#home">
        <img
          src={arrow}
          alt="arrow"
          className="w-20 h-20 p-1 animate-bounce sticky bottom-10 right-10  bg-danger rounded-full"
        />
      </a>
    </div>
  );
}

export default Arrow;
