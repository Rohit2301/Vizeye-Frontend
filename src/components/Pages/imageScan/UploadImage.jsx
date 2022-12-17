import { HomeGetStartedBtn } from "../../../utils/buttons";
import fileUpload from "../../../assets/images/fileUpload.png";

const UploadImage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bgBlue w-full h-full gap-y-10 pt-12 ">
      {/* text div */}
      <div className="relative flex flex-col justify-content items-center text-white gap-y-8">
        <div className="text-6xl font-sansationR">Scan your image</div>
        <div className="text-base font-ptSerifR w-3/4 text-center">
          We present an online OCR (Optical Character Recognition) service to
          extract text from image. Upload photo to our image to text converter,
          click on submit and get your text file instantly.
        </div>
      </div>
      {/* text div */}

      {/* uploading image div */}
      <div className="bg-pinkish w-[80%] pt-14 pb-20 px-20 rounded-lg">
        <div className="flex flex-col justify-content items-center bg-[#D9D9D9] py-10 outline-dashed outline-[#C6C6C6] outline-[4px] rounded-lg">
          <div className="pb-2">
            <img src={fileUpload} alt="fileUpload icon" className="w-18 h-20" />
          </div>
          <div className="text-black font-sansationR text-4xl">
            Drag, Drop and <br /> Upload Image
          </div>
          <div
            className="mt-6"
            style={{ filter: "drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.25))" }}
          >
            {<HomeGetStartedBtn data={"Upload"} />}
          </div>
        </div>
      </div>
      {/* uploading image div */}

      {/* submit button */}
      <div
        className="mt-6 mb-10"
        style={{ filter: "drop-shadow(6px 4px 8px #000000)" }}
      >
        {<HomeGetStartedBtn data={"Submit"} />}
      </div>
      {/* submit button */}
    </div>
  );
};

export default UploadImage;
