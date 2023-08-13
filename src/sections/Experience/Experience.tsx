import Title from "../../components/Title/Title";
import { exp } from "../../contents/experiences";

function Experience() {
  return (
    <div className="px-5 md:px-10 xl:px-20 py-36">
      <Title title="Experience" />
      <div className="mt-24 text-secondary sm:flex justify-center gap-10 lg:gap-24">
        <div className="hidden sm:flex flex-col justify-center">
          {exp.map((data, index) => {
            return (
              <>
                <img
                  src={data.icon}
                  alt={data.company}
                  className={`w-[100px] fill-danger mt-[${index * 25}%]`}
                />
                <div className="h-[25%] w-[10px] bg-danger mx-auto mt-4 last:h-[0]"></div>
              </>
            );
          })}
        </div>

        <div className="p-12 lg:p-20 shadow-2xl rounded-[30px]">
          {exp.map((data, index) => {
            return (
              <>
                <p className={`${index} sm:text-2xl font-medium`}>
                  {data.year}
                </p>
                <p className="text-4xl text-primary font-semibold mt-6">
                  {data.company}
                </p>
                <p className="sm:text-2xl font-medium mt-4">{data.position}</p>
                <p className="sm:text-2xl font-medium">{data.department}</p>

                <hr className="border-2 border-solid my-8 last:hidden" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
