import Illus404 from "../../../assets/images/Illus 404.png";
import { HomeGetStartedBtn } from "../../../utils/buttons";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative flex flex-col w-full darkBlueBg justify-center items-center gap-y-20 pt-16 pb-10">
      {/* illustrainot + button */}
      <div className="relative flex justify-between items-center w-full px-36 gap-x-20 mt-10">
        {/* text + home btn */}
        <div className="relative flex flex-col text-white flex flex-col ">
          <div className="font-sansationR text-5xl py-16 leading-tight">
            Wow, You’ve found a page that doesn’t exists!
          </div>
          <Link to={"/"}>
            <div
              className="w-32"
              style={{ filter: "drop-shadow(1px 1px 0px #cccbcb)" }}
            >
              <div className="relative font-futuraMd text-3xl text-[#ffffff] text-center orangeBtn rounded-lg">
                <button className="py-2">Home</button>
              </div>
            </div>
          </Link>
        </div>
        {/* text + home btn */}

        {/* Illustration */}
        <div>
          <img
            src={Illus404}
            alt="404 Illustration"
            className="w-[36rem] h-auto"
            draggable="false"
          />
        </div>
        {/* Illustration */}
      </div>
      {/* illustrainot + button */}

      {/* caption */}
      <div className="relative text-white text-lg text-center font-mons w-full px-60">
        Just Kidding, it seems Robo, can’t find the page you are looking for.
        Kindly check the address of the page you intend to visit or return to
        Home via given button.
      </div>
      {/* caption */}
    </div>
  );
};

export default Error;
