import Questions from "../../utils/questions";
import prupleSquare from "../../assets/productsPageAssests/prupleSquare.png";
import greenHSSquare from "../../assets/productsPageAssests/greenHSSquare.svg";
import BlueSDot from "../../assets/productsPageAssests/BlueSDot.png";
import purpleHSSquare from "../../assets/productsPageAssests/purpleHSSquare.svg";
import GreenSDot from "../../assets/productsPageAssests/GreenSDot.png";
import purpleSDot from "../../assets/productsPageAssests/purpleSDot.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import blueHSSquare2 from "../../assets/productsPageAssests/blueHSSquare2.png";

const FreqAskedQues = () => {
  return (
    <div className="relative flex flex-col lightbg pt-16 pb-20 px-28 text-center text-black gap-y-8 items-center overflow-hidden">
      <div className="absolute w-screen h-screen">
        <div className="relative left-[-2rem] top-[-4rem]">
          <img src={prupleSquare} alt="pruple square" className="w-20" />
        </div>
        <div className="relative left-[92rem]">
          <img src={greenHSSquare} alt="greenhsquare" className="w-20" />
        </div>
        <div className="relative top-[20rem] left-[75rem]">
          <img src={BlueSDot} alt="blue s dot" className="w-6" />
        </div>
        <div className="relative top-[20rem] left-[15rem]">
          <img src={purpleHSSquare} alt="purple hSsquare" className="w-16" />
        </div>
        <div className="relative top-[10rem] left-[5rem]">
          <img src={GreenSDot} alt="green sdot" className="w-8" />
        </div>
        <div className="relative top-[15rem] left-[65rem]">
          <img src={purpleSDot} alt="purple sdot" className="w-4" />
        </div>
        <div className="relative top-[-5rem] left-[10rem]">
          <img src={BlueSDot} alt="blue s dot" className="w-6" />
        </div>
        <div className="relative top-[-22rem] left-[15rem]">
          <img src={blueHSSquare2} alt="blue hssquare" className="w-16" />
        </div>
      </div>
      <div className="text-5xl font-sansationB mb-16">
        Frequently Asked Questions
      </div>
      <div className="flex ">
        <div className="relative left-[10rem]">
          <Questions />
        </div>
        <div className="relative left-[10rem] top-[-5rem]">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_zrqthn6o.json"
            style={{ width: "30rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FreqAskedQues;
