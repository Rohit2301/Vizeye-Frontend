import { Link } from "react-router-dom";
import { BlueGradientBtn } from "../../utils/buttons";
import demoImage from "../../assets/images/ana de armas.jpg";
import HowToBg from "../Layouts/background/howToBg";

const HowTo = () => {
  return (
    <div className="lightbg overflow-hidden">
      <div
        className="relative text-white lightBlueBg h-[76rem] pt-4 top-[-0.1rem]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 88%)",
        }}
      >
        <HowToBg />
        <div className="relative">
          <div className="text-6xl font-sansationB text-center mb-24">
            How To Guide
          </div>
          <div className="flex flex-col gap-y-28 px-44">
            {/* ------------------------------------------face reko------------------------- */}
            <div className="flex">
              <div className="flex flex-col">
                <div className="font-sansationR text-4xl mb-10">
                  Face Recognition
                </div>
                <div className="font-mons text-[#e8e8e8] mr-40">
                  Just Upload the image that you want to process through the
                  upload page. And boom, you will be presented with the detected
                  faces, facelandmarks and emotions in the image.
                </div>
              </div>
              <div>
                <img
                  src={demoImage}
                  alt="face recognition steps gif"
                  className="w-[42rem] rounded-xl"
                />
              </div>
            </div>
            {/* ----------------------------------real time face detection------------------------- */}
            <div className="flex">
              <div>
                <img
                  src={demoImage}
                  alt="face recognition steps gif"
                  className="w-[42rem] rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-sansationR text-4xl mb-10 text-end">
                  Real Time Face Detection
                </div>
                <div className="font-mons text-[#e8e8e8] text-end ml-40">
                  Just Upload the image that you want to process through the
                  upload page. And boom, you will be presented with the detected
                  faces, facelandmarks and emotions in the image.
                </div>
              </div>
            </div>
            {/* ----------------------------------text to speech------------------------- */}
            <div className="flex">
              <div className="flex flex-col">
                <div className="font-sansationR text-4xl mb-10">
                  Text To Speech
                </div>
                <div className="font-mons text-[#e8e8e8] mr-40">
                  Just Upload the image that you want to process through the
                  upload page. And boom, you will be presented with the detected
                  faces, facelandmarks and emotions in the image.
                </div>
              </div>
              <div>
                <img
                  src={demoImage}
                  alt="face recognition steps gif"
                  className="w-[42rem] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
