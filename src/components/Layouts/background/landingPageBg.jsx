import orangeHSquare from "../../../assets/landingPageAssests/orangeHSquare.png";
import orangeSquare from "../../../assets/landingPageAssests/orangeSquare.png";
import BlueSDot from "../../../assets/landingPageAssests/blueSDot.png";
import orangeDot from "../../../assets/landingPageAssests/orangeDot-1.png";
import BlueSDot2 from "../../../assets/landingPageAssests/blueSDot2.png";
import whiteHSquare from "../../../assets/landingPageAssests/whiteHSquare.png";
import whiteDot from "../../../assets/landingPageAssests/white dot.png";

const LandingPageBg = () => {
  return (
    <div className="absolute h-screen w-screen">
      <div className="relative ml-[-2rem] top-60">
        <img src={orangeHSquare} alt="orangehsqaure" className="w-20" />
      </div>
      <div className="relative w-40 h-40" />
      {/* <div className="relative top-[36.1rem] left-[40rem]">
        <img src={orangeSquare} alt="orangesqaure" className="w-40" />
      </div> */}
      <div className="relative top-[-8rem] left-[25rem]">
        <img src={BlueSDot} alt="blue shining dot" className="w-6" />
      </div>
      <div className="relative top-[12rem] left-[40rem]">
        <img src={BlueSDot2} alt="blue shining dot 2" className="w-6" />
      </div>
      <div className="relative top-[22rem] left-[30rem]">
        <img src={orangeDot} alt="orange dot" className="w-[0.35rem]" />
      </div>
      <div className="relative top-[21rem] left-[10rem]">
        <img src={whiteHSquare} alt="white Shining sq" className="w-[3.5rem]" />
      </div>
      <div className="relative top-[21rem] left-[65rem]">
        <img src={whiteDot} alt="white dot" className="w-[1rem]" />
      </div>
      <div className="relative top-[-12rem] left-[45rem]">
        <img src={orangeHSquare} alt="orange h sq" className="w-6" />
      </div>
      <div className="relative top-[12rem] left-[50rem]">
        <img src={whiteHSquare} alt="white Shining sq" className="w-[2rem]" />
      </div>
      <div className="relative top-[-21rem] left-[4rem]">
        <img src={BlueSDot2} alt="blue shining dot 2" className="w-4" />
      </div>
      <div className="relative top-[1rem] left-[3rem]">
        <img src={whiteDot} alt="white dot" className="w-[1rem]" />
      </div>
    </div>
  );
};

export default LandingPageBg;
