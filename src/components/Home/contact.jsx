import laptopIluss from "../../assets/images/laptop illustration.png";
import RohitKumar from "../../assets/images/rohit kumar masked.png";
import twitterLogo from "../../assets/images/twitter logo.png";
import linkedLogo from "../../assets/images/linkedin Logo.png";
import githubLogo from "../../assets/images/githubLogo.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import code from "../../assets/images/98764-custom-developer-animation-02.gif";

const ContactMe = () => {
  return (
    <div className="flex darkBlueBg items-center py-10 justify-evenly">
      <div className="relative right-10">
        {/* <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_hijdc45w/data.json"
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>{" "} */}
        <img
          src={code}
          alt="laptop illustration"
          className="w-[24rem] h-72 rounded-lg"
        />
      </div>
      <div className="">
        <img src={RohitKumar} alt="Rohit Kumar masked" className="w-80" />
      </div>
      <div className="">
        <div
          className="lightbg rounded-xl px-8 py-4 flex flex-col gap-y-4 font-sansationR"
          style={{ filter: "drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.25))" }}
        >
          <div className="flex gap-x-4 items-center">
            <div>
              <img src={twitterLogo} alt="twitter logo" className="w-16" />
            </div>
            <a href="https://twitter.com/RohitDuhan15" target="_black">
              <div className="text-[#222222] text-3xl hover:underline hover:text-black">
                @RohitDuhan15
              </div>
            </a>
          </div>
          <div className="flex gap-x-8 items-center">
            <div className="relative left-1">
              <img src={linkedLogo} alt="twitter logo" className="w-12" />
            </div>
            <a
              href="https://www.linkedin.com/in/rohit-kumar-578baa203/"
              target="_black"
            >
              <div className="text-[#222222] text-3xl hover:underline hover:text-black">
                Rohit2301
              </div>
            </a>
          </div>
          <div className="flex gap-x-6 items-center">
            <div>
              <img src={githubLogo} alt="twitter logo" className="w-14" />
            </div>
            <a href="https://twitter.com/RohitDuhan15" target="_black">
              <div className="text-[#222222] text-3xl hover:underline hover:text-black">
                Rohit Kumar
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
