import { HomeGetStartedBtn } from "../../utils/buttons";
import HomeBackground from "../Layouts/background/homeBackground";
import womenIllustration from "../../assets/images/Womenillust.png";

const Home = () => {
  return (
    <main className="w-full relative h-screen mt-[-1.5rem] flex flex-col justify-center">
      <div className="relative flex flex-col items-center justify-around h-full">
        {/* text div */}
        <div className="mt-40">
          <div className="relative flex flex-col items-center gap-y-4 text-white justify-center">
            <div className="text-6xl font-sansationR">
              The #1 WordPress Caching Plugin
            </div>
            <div className="text-xl font-ptSerif">
              Who doesn’t know about this site? They find and recognize!
            </div>
            <div className="mt-10">
              {<HomeGetStartedBtn data={"Get Started"} />}
            </div>
          </div>
        </div>
        {/* text div */}

        {/* illustration */}
        <div className="">
          <img
            src={womenIllustration}
            alt="Women Illustration"
            className="w-96 h-76"
          />
        </div>
        {/* illustration */}
      </div>
      {/* background div */}
      <HomeBackground />
      {/* background div */}
    </main>
  );
};

export default Home;
