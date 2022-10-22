import { HomeGetStartedBtn } from "../../utils/buttons";

const RealTimeFD = () => {
  return (
    <div className="relative mt-[-1.5rem] w-full h-screen bgBlue flex flex-col items-center justify-center gap-y-16 py-10">
      <div className="relative w-3/4 h-3/4" />
      <div className="flex items-between justify-center gap-x-40">
        <div className="">{<HomeGetStartedBtn data={"Snapshot"} />}</div>
        <div className="">{<HomeGetStartedBtn data={"Start Video"} />}</div>
      </div>
    </div>
  );
};

export default RealTimeFD;
