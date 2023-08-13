import { activites } from "../../contents/contacts";

const Activities = () => {
  return (
    <div className="flex max-lg:justify-center lg:w-full">
      <div className="flex flex-col flex-wrap lg:flex-row items-start lg:items-center lg:justify-evenly  mt-4 gap-6 xl:gap-10 lg:w-full">
        {activites.map((activity, index) => {
          return (
            <div className={`${index} flex gap-6`}>
              <img
                src={activity.icon}
                alt={activity.title}
                className="w-[65px]"
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
