import { ports } from "../../contents/ports";

function Ports() {
  const hoverContent: string =
    "hover:cursor-pointer hover:scale-110 hover:duration-300";

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-16 gap-10">
      {ports.map((port, index) => {
        return (
          <div
            className={`${index} w-[300px] h-[250px] rounded-3xl bg-base text-center pt-10 px-10`}
          >
            <a href={port.link} target="_blank">
              <img
                src={port.img}
                alt={port.title}
                className={`rounded-3xl w-[220px] h-[135px] ${hoverContent}`}
              />
            </a>
            <p className="text-2xl font-medium mt-4 mb-6">{port.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Ports;
