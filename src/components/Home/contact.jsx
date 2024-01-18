import laptopIluss from "../../assets/images/laptop illustration.png";
import RohitKumar from "../../assets/images/rohit kumar masked.png";
import MohitKumar from "../../assets/images/MohitKumar.png";
import twitterLogo from "../../assets/images/twitter logo.png";
import linkedLogo from "../../assets/images/linkedin Logo.png";
import githubLogo from "../../assets/images/githubLogo.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import code from "../../assets/images/98764-custom-developer-animation-02.gif";

const ContactMe = () => {
  return (
    <div className="flex darkBlueBg items-center py-10 justify-evenly">
      <div className="relative right-10">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_3ntisyac.json"
          style={{ height: "300px", width: "300px" }}
        />

        {/* <img
          src={code}
          alt="laptop illustration"
          className="w-[24rem] h-72 rounded-lg"
        /> */}
      </div>
      <div className="">
        <img src={MohitKumar} alt="Rohit Kumar masked" className="w-80" />
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
            <a href="https://twitter.com/MohitDuhan199" target="_black">
              <div className="text-[#222222] text-3xl hover:underline hover:text-black">
                @MohitDuhan15
              </div>
            </a>
          </div>
          <div className="flex gap-x-8 items-center">
            <div className="relative left-1">
              <img src={linkedLogo} alt="twitter logo" className="w-12" />
            </div>
            <a
              href="https://www.linkedin.com/in/mohit-duhan-17a551212/"
              target="_black"
            >
              <div className="text-[#222222] text-3xl hover:underline hover:text-black">
                Mohit2301
              </div>
            </a>
          </div>
          <div className="flex gap-x-6 items-center">
            <div>
              <img src={githubLogo} alt="twitter logo" className="w-14" />
            </div>
            <a href="https://github.com/mohitduhan19" target="_black">
              <div className="text-[#222222] text-3xl hover:underline hover:text-black">
                Mohit Kumar
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
