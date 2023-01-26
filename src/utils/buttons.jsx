import "../../src/index.css";
import Microphone from "../assets/images/Microphone.png";

const NavGetStartedBtn = () => {
  return (
    <div>
      <div className="navGetStartedBtn px-3 py-1" data="Get Started"></div>
    </div>
  );
};
const HomeGetStartedBtn = ({ data, children, text }) => {
  return (
    <div className="relative font-mons text-xl text-center orangeBtn rounded-lg flex">
      <button
        className={`px-4 py-3 ${
          text === "white" ? "text-white" : "text-black"
        }`}
      >
        {data}
        {children}
      </button>
    </div>
  );
};

const TextToSpeechStartNowBtn = ({ data, children, text, icon }) => {
  return (
    <div className="font-mons text-xl text-center orangeBtn rounded-lg flex">
      {icon ? (
        <img src={Microphone} alt="Microphone" className="w-10 ml-1 my-2" />
      ) : (
        <></>
      )}
      <button
        className={`px-2 py-3 ${
          text === "white" ? "text-white" : "text-black"
        }`}
      >
        {data}
        {children}
      </button>
    </div>
  );
};

export { TextToSpeechStartNowBtn };
export { HomeGetStartedBtn };
export { NavGetStartedBtn };
