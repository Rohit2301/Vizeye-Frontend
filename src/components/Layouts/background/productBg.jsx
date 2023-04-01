import BlueSDot from "../../../assets/productsPageAssests/BlueSDot.png";
import GreenSDot from "../../../assets/productsPageAssests/GreenSDot.png";
import purpleSDot from "../../../assets/productsPageAssests/purpleSDot.png";
import redSDot from "../../../assets/productsPageAssests/RedSDot.png";
import darkBlueSDot from "../../../assets/productsPageAssests/darkBlueSDot.png";
import blueHSSquare2 from "../../../assets/productsPageAssests/blueHSSquare2.png";
import greenHSquare from "../../../assets/productsPageAssests/greenHSquare.png";
import prupleSquare from "../../../assets/productsPageAssests/prupleSquare.png";
import purpleHSquare from "../../../assets/productsPageAssests/purpleHSquare.png";
import MaskGreenHSquare from "../../../assets/productsPageAssests/MaskGreenHSquare.png";

const ProductBg = () => {
  return (
    <div className="absolute h-screen w-screen">
      <div className="relative top-[50rem] left-[20rem]">
        <img src={blueHSSquare2} alt="blue hollow Ssqaure" className="w-12" />
      </div>
      <div className="relative top-[20rem] left-[63rem]">
        <img src={MaskGreenHSquare} alt="green h square" className="w-12" />
      </div>
      <div className="relative top-[-6rem] left-[20rem]">
        <img src={BlueSDot} alt="blue shin dot" className="w-6" />
      </div>
      <div className="relative left-[91.8rem] top-96">
        <img src={darkBlueSDot} alt="purple square" className="w-4" />
      </div>
      <div className="relative left-[60rem] top-[36rem]">
        <img src={purpleSDot} alt="purple sdot" className="w-[1.5rem]" />
      </div>
      <div className="relative left-[70rem] top-[-12rem]">
        <img src={BlueSDot} alt="red s dot" className="w-[2rem]" />
      </div>
    </div>
  );
};
export default ProductBg;
