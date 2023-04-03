import demoImage from "../assets/images/ana de armas.jpg";
import { BlueGradientBtn } from "./buttons";
import { Link } from "react-router-dom";
import faceReco from "../assets/images/faceReko.jpg";
import textTS from "../assets/images/textTS.jpg";
import realTimeFd from "../assets/images/realTimeFd.jpg";

const PurpleCard = () => {
  return (
    <div
      className="flex flex-col items-center gap-y-4 py-4 px-4 w-[24rem]"
      style={{
        background:
          "radial-gradient(97.34% 97.34% at 5.08% 100%, #9C488A 0%, #CB9FC1 96.04%)",
        border: "1px solid #9E76A5",
        boxShadow: "-10px 10px 60px #C14CD5",
        borderRadius: "25px",
      }}
    >
      <div className="text-black font-sansationR text-4xl text-center">
        Real Time <br />
        Face Detection
      </div>
      <div>
        <img
          src={realTimeFd}
          alt="face detection product card"
          className="rounded-lg h-[11.125rem]"
        />
      </div>
      <div className="text-[#252525] font-mons">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries.
      </div>
      <Link to="/realTimeFd">
        <div className="w-36 mb-4">
          <BlueGradientBtn data="Get Started" />
        </div>
      </Link>
    </div>
  );
};

const GreenCard = () => {
  return (
    <div
      className="flex flex-col items-center gap-y-4 py-4 px-4 w-[24rem]"
      style={{
        background:
          "radial-gradient(97.34% 97.34% at 5.08% 100%, #579E51 0.01%, #C8FFBA 100%)",
        border: "1px solid #92C966",
        boxShadow: "-10px 10px 60px #80E270",
        borderRadius: "25px",
      }}
    >
      <div className="text-black font-sansationR text-4xl text-center">
        Text to <br />
        Speech
      </div>
      <div>
        <img
          src={textTS}
          alt="face detection product card"
          className="rounded-lg h-[11.125rem]"
        />
      </div>
      <div className="text-[#252525] font-mons">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries.
      </div>
      <Link to="/textToSpeech">
        <div className="w-36 mb-4">
          <BlueGradientBtn data="Get Started" />
        </div>
      </Link>
    </div>
  );
};
const BlueCard = () => {
  return (
    <div
      className="flex flex-col items-center gap-y-4 py-4 px-4 w-[24rem]"
      style={{
        background:
          "radial-gradient(97.34% 97.34% at 5.08% 100%, #55AFA4 0.01%, #C6FFF8 100%)",
        border: "1px solid #86D9CF",
        boxShadow: "-10px 10px 60px #5FE6DD",
        borderRadius: "25px",
      }}
    >
      <div className="text-black font-sansationR text-4xl text-center">
        Face <br />
        Detection
      </div>
      <div>
        <img
          src={faceReco}
          alt="face detection product card"
          className="rounded-lg w-52 h-[11.125rem]"
        />
      </div>
      <div className="text-[#252525] font-mons">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries.
      </div>
      <Link to="/uploadImage">
        <div className="w-36 mb-4">
          <BlueGradientBtn data="Get Started" />
        </div>
      </Link>
    </div>
  );
};

export { PurpleCard };
export { GreenCard };
export { BlueCard };
