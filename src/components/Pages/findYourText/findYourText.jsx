import demoFindTextImage from "../../../assets/images/demoFindTextImage.png";
import { HomeGetStartedBtn } from "../../../utils/buttons";
import "../../../index.css";
import TextField from "@mui/material/TextField";

const FindYourText = () => {
  return (
    <div className="relative w-full h-screen darkBlueBg flex flex-col items-center gap-y-14 py-12 px-20">
      {/* text div */}
      <div className="relative flex flex-col justify-content items-center text-white gap-y-16">
        <div className="text-5xl font-sansationR">Find Your Text</div>
        <div className="font-ptSerifR text-lg text-center">
          Accurately convert speech into text with an API powered by the best of
          Google’s AI research and technology.
        </div>
      </div>
      {/* text div */}
      {/* image and text in it divs */}
      <div className="relative flex gap-x-40">
        <div className="w-96">
          <img
            src={demoFindTextImage}
            alt="Find Your Text pic"
            className="rounded-xl"
          />
        </div>
        <div className="w-96 bg-[#FFF3ED] rounded-xl FYTBoxShad">
          <TextField
            color="secondary"
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
        </div>
      </div>
      {/* image and text in it divs */}
      {/* submit btn */}
      <div>{<HomeGetStartedBtn data="Submit" text="white" />} </div>
      {/* submit btn */}
    </div>
  );
};

export default FindYourText;
