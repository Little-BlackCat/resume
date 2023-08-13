import { technologies } from "../../contents/technologies";

function Tech() {
  return (
    <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-y-6 xl:flex">
      {technologies.map((tech, index) => {
        return (
          <div
            className={`${index} flex max-sm:flex-wrap lg:flex-col gap-10 justify-center md:justify-between items-center`}
          >
            <div className="flex flex-2 flex-col justify-center items-center md:w-[300px]">
              <img src={tech.icon} alt={tech.title} className="w-[150px]" />
              <p className="uppercase text-primary text-4xl font-bold">
                {tech.title}
              </p>
            </div>
            <div className="flex-1 bg-background rounded-3xl shadow-2xl">
              <div className="flex flex-wrap xl:flex-col gap-4 p-10">
                {tech.tech.map((data, index) => {
                  return (
                    <div
                      className={`${index} bg-success text-background text-center py-2 px-4 rounded-3xl`}
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tech;
