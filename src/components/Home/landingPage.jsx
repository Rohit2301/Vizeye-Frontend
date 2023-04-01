import LandingPageBg from "../Layouts/background/landingPageBg";
import AiFace from "./aiFace";
import purpleHSquare from "../../assets/productsPageAssests/purpleHSquare.png";
const LandingPage = () => {
  return (
    <div className="relative lightbg  overflow-hidden">
      <div className="absolute top-[48rem] left-[2rem]">
        <img src={purpleHSquare} alt="purple hsquare" className="w-[4rem]" />
      </div>
      <div
        className="relative h-[55rem] w-screen darkBlueBg pt-1"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 79%)",
        }}
      >
        <LandingPageBg />
        {/* text div */}
        <div className="relative flex flex-col items-start justify-center text-white mt-40 ml-52">
          <div className="text-6xl font-sansationR leading-[4.2rem]">
            See through <br />
            <span className="font-sansationB">visionary eye</span>
          </div>
          <div className="mt-6 text-xl font-mons text-[#D0D0D0]">
            Now detect faces, emotions, match celebs, read text, recognize{" "}
            <br /> objects in a blink.
          </div>
          <div className="my-16 cursor-pointer">
            <div
              style={{
                backgroundImage:
                  "conic-gradient(from 180deg at 50% 50%, #09F9FC -141.38deg, #F704FB 31.12deg, #09F9FC 218.62deg, #F704FB 391.12deg)",
              }}
              className="px-[5px] py-[5px] rounded-2xl"
            >
              <div className="relative bg-[#001236] px-[14px] py-[5px] rounded-2xl text-2xl text-center">
                Learn More
              </div>
            </div>
          </div>
        </div>
        {/* text div */}
        <div>
          <AiFace />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
