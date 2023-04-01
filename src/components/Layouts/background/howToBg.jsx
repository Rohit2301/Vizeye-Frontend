import blueSDot2 from "../../../assets/landingPageAssests/blueSDot2.png";
import orangeHLSquare from "../../../assets/landingPageAssests/orangeHLSquare.png";
import whiteHSquare from "../../../assets/landingPageAssests/whiteHSquare.png";
import orangeDot from "../../../assets/productsPageAssests/GreenSDot.png";
import blueHSSquare from "../../../assets/productsPageAssests/blueHSSquare.png";

const HowToBg = () => {
  return (
    <div className="absolute w-screen h-screen">
      <div className="relative left-[10rem]">
        <img src={blueSDot2} alt="blue sdot" className="w-6" />
      </div>
      <div className="relative top-[20rem]">
        <img src={orangeHLSquare} alt="orange hlsquare" className="w-10" />
      </div>
      <div className="relative left-[90rem]">
        <img src={whiteHSquare} alt="white hl sqaure" className="w-16" />
      </div>
      <div className="relative left-[50rem]">
        <img src={orangeDot} alt="orange dot" className="w-6" />
      </div>
      <div className="relative left-[85rem] top-[53rem]">
        <img src={blueHSSquare} alt="blue hssquare" className="w-16" />
      </div>
    </div>
  );
};
export default HowToBg;
