import { HomeGetStartedBtn } from "../../../utils/buttons";
import fileUpload from "../../../assets/images/fileUpload.png";
import { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Browse");
  const [uploadedFile, setUploadedFile] = useState({});

  const updateFileName = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const submitUploadForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:4000", formData, {
        headers: {
          "Content-type": "multipart/form-date",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("prob with server");
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err.response.data.msg);
      }
      console.log(err.config);
    }
  };

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
      <form
        className="reltaive w-full flex flex-col justify-center items-center"
        onSubmit={submitUploadForm}
      >
        <div className="reltaive bg-pinkish w-[80%] pt-14 pb-20 px-20 rounded-lg">
          <div className="relative flex flex-col justify-content items-center bg-[#D9D9D9] py-10 outline-dashed outline-[#C6C6C6] outline-[4px] rounded-lg">
            <div className="pb-2">
              <img
                src={fileUpload}
                alt="fileUpload icon"
                className="w-18 h-20"
              />
            </div>
            <div className="text-black font-sansationR text-4xl">
              Drag, Drop and <br /> Upload Image
            </div>
            <div
              className="mt-6"
              style={{
                filter: "drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {
                <HomeGetStartedBtn data={fileName}>
                  <input
                    id="UploadFile"
                    name="uploadFile"
                    type="file"
                    className="absolute inset-0 opacity-0 w-full h-full"
                    onChange={updateFileName}
                  ></input>
                </HomeGetStartedBtn>
              }
            </div>
          </div>
        </div>
        {/* uploading image div */}

        {/* submit button */}
        <div
          className="mt-6 mb-10"
          style={{ filter: "drop-shadow(6px 4px 8px #000000)" }}
        >
          {
            <HomeGetStartedBtn>
              <input type="submit" value="Upload" className="cursor-pointer" />
            </HomeGetStartedBtn>
          }
        </div>
      </form>

      {/* submit button */}
      <img src={uploadedFile.filePath}></img>
    </div>
  );
};

export default UploadImage;
