import bottomLeftLines from "../../../assets/backgroundElement/botomLeftLines.png";
import midRightLines from "../../../assets/backgroundElement/midRightLines.png";
import orangeSquare from "../../../assets/backgroundElement/orangeSquare.svg";
import orangeDot from "../../../assets/backgroundElement/orangeDot.svg";
import whiteDot from "../../../assets/backgroundElement/whiteDot.svg";
import orangeHSquare from "../../../assets/backgroundElement/orangeHSquare.svg";
import whiteHSquare from "../../../assets/backgroundElement/whiteHSquare.svg";

const HomeBackground = () => {
  return (
    <div className="w-full overflow-hidden absolute h-full mt-[-1.5rem] top-6 left-0">
      {/* background div */}
      <div className="absolute bottom-0">
        <img src={bottomLeftLines} alt="bottomLeftLines" className="w-96" />
      </div>
      <div className="absolute right-0 top-16">
        <img
          src={midRightLines}
          alt="midRightLines"
          className="w-96 h-[40rem]"
        />
      </div>
      <div className="absolute bottom-10 right-0 mr-[-3rem]">
        <img
          src={orangeSquare}
          alt="orangeSquare"
          className="w-[13rem] h-[9rem]"
        ></img>
      </div>
      <div className="absolute right-60 bottom-96">
        <img
          src={orangeDot}
          alt="orangeDot"
          className="w-[0.35rem] h-[0.35rem]"
        ></img>
      </div>
      <div className="absolute left-80 bottom-40">
        <img
          src={orangeDot}
          alt="orangeDot"
          className="w-[0.35rem] h-[0.35rem] "
        ></img>
      </div>
      <div className="absolute left-24 bottom-96">
        <img
          src={whiteDot}
          alt="whiteDot"
          className="w-[0.35rem] h-[0.35rem] "
        ></img>
      </div>
      <div className="absolute right-[30rem] bottom-96">
        <img
          src={whiteDot}
          alt="whiteDot"
          className="w-[0.35rem] h-[0.35rem] "
        ></img>
      </div>
      <div className="absolute bottom-16 right-96">
        <img src={orangeHSquare} alt="orangeHSquare" className="w-8 h-8 "></img>
      </div>
      <div className="absolute bottom-8 left-60">
        <img src={whiteHSquare} alt="whiteHSquare" className="w-8 h-8 "></img>
      </div>
      <div className="absolute bottom-96 left-96">
        <img src={whiteHSquare} alt="whiteHSquare" className="w-6 h-6 "></img>
      </div>
      <div className=" absolute bottom-52 left-[-1rem]">
        <img
          src={orangeHSquare}
          alt="orangeHSquare"
          className="w-12 h-12"
        ></img>
      </div>
    </div>
  );
};

export default HomeBackground;
