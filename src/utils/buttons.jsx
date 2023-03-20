import "../../src/index.css";
import Microphone from "../assets/images/Microphone.png";
import MicrophoneOffIcon from "../assets/images/microphone-off.png";

const NavGetStartedBtn = () => {
  return (
    <div>
      <div
        className="navGetStartedBtn px-3 py-1 text-black"
        data="Get Started"
      ></div>
    </div>
  );
};
const HomeGetStartedBtn = ({ data, children, text }) => {
  return (
    <div className="relative font-mons text-xl text-center orangeBtn rounded-lg flex">
      <button
        className={`px-4 py-2 ${
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
        <img
          src={Microphone}
          alt="Microphone"
          className="w-10 ml-1 my-1"
          draggable="false"
        />
      ) : (
        <></>
      )}
      <button
        className={`px-2 py-2 ${
          text === "white" ? "text-white" : "text-black"
        }`}
      >
        {data}
        {children}
      </button>
    </div>
  );
};
const SpeechToTextStopBtn = ({ data, children, text, icon }) => {
  return (
    <div className="font-mons text-xl text-center orangeBtn rounded-lg flex">
      {icon ? (
        <img
          src={MicrophoneOffIcon}
          alt="Microphone"
          className="w-8 h-8 ml-1 my-1"
          draggable="false"
        />
      ) : (
        <></>
      )}
      <button
        className={`px-2 py-2 ${
          text === "white" ? "text-white" : "text-black"
        }`}
      >
        {data}
        {children}
      </button>
    </div>
  );
};

const BlueGradientBtn = ({ data }) => {
  return (
    <div className="text-white text-xl lightBlueBg rounded-md text-center font-mons py-2 cursor-pointer">
      {data}
    </div>
  );
};

export { SpeechToTextStopBtn };
export { TextToSpeechStartNowBtn };
export { HomeGetStartedBtn };
export { NavGetStartedBtn };
export { BlueGradientBtn };
