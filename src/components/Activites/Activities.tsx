import { activites } from "../../contents/activities";

const Activities = () => {

  const hoverContent:string = "hover:scale-125 hover:duration-300"
  return (
    <div className="flex max-lg:justify-center lg:w-full">
      <div className="flex flex-col flex-wrap lg:flex-row md:grid md:grid-cols-2 md:gap-x-36 lg:flex items-start lg:items-center lg:justify-evenly  mt-4 lg:gap-6 xl:gap-10 lg:w-full">
        {activites.map((activity, index) => {
          return (
            <div className={`${index} flex gap-6`}>
              <img
                src={activity.icon}
                alt={activity.title}
                className={`w-[65px] ${hoverContent}`}
              />
              <div className="pt-8">
                <h2 className="text-5xl font-semibold">{activity.amount}</h2>
                <p>{activity.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
