import { HomeGetStartedBtn } from "../../../utils/buttons";
import fileUpload from "../../../assets/images/fileUpload.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateImageUrl } from "../../../redux/uploadedImage";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { updateLoader } from "../../../redux/loader";

const UploadImage = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setFileName(acceptedFiles[0].name);
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    rejectedFiles,
  } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/svg+xml": [],
      "image/png": [],
      "image/webp": [],
    },
    maxFiles: 1,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(`${process.env.REACT_APP_PORT + "/uploadImage"}`);
  const submitUploadForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      dispatch(updateLoader(true));
      console.log("upldaofin");
      const res = await axios.post(
        `${process.env.REACT_APP_PORT + "/uploadImage"}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-date",
          },
        }
      );
      const filePath = res.data.filePath;
      dispatch(updateImageUrl(filePath));
      dispatch(updateLoader(false));

      navigate("/faceExpResolver");

      // setUploadedFile(filePath);
      // fileUrl.current = res.data.filePath;
      // console.log(fileUrl);
      // navigate("/real", { state: { fileUrl: fileUrl } });
    } catch (error) {
      console.log("error in uploading", error);
      // if (err.response.status === 500) {
      //   console.log("prob with server");
      // } else if (err.request) {
      //   console.log(err.request);
      // } else {
      //   console.log(err.response.data.msg);
      // }
      dispatch(updateLoader(false));

      // console.log(err.config);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center darkBlueBg w-full h-screen gap-y-10 pt-12 ">
      {/* text div */}
      <div className="relative flex flex-col justify-content items-center text-white gap-y-8">
        <div className="text-6xl font-sansationR">Scan your image</div>
        <div className="text-lg font-futuraBk w-3/4 text-center">
          We present an online OCR (Optical Character Recognition) service to
          extract text from image. Upload photo to our image to text converter,
          click on submit and get your text file instantly.
        </div>
      </div>
      {/* text div */}

      {/* uploading image div */}
      <form
        className="relative w-full flex flex-col justify-center items-center"
        onSubmit={submitUploadForm}
      >
        <div
          {...getRootProps()}
          className="relative bg-pinkish w-[80%] pt-14 pb-20 px-20 rounded-lg"
        >
          <div className="relative flex flex-col justify-content items-center py-10 outline-dashed outline-[#C6C6C6] outline-[4px] rounded-lg bg-[#D9D9D9]">
            <input {...getInputProps()} />
            {fileName.length === 0 ? (
              <>
                <div className="pb-2">
                  <img
                    src={fileUpload}
                    alt="fileUpload icon"
                    className="w-18 h-20"
                    draggable="false"
                  />
                </div>
                <div className="text-black font-sansationR text-4xl">
                  {!isDragActive && "Click here or drop a file to upload!"}
                  {isDragActive && "Drop it like it's hot!"}
                  {isDragReject && "File type not accepted, sorry!"}
                </div>
              </>
            ) : (
              <div>{fileName}</div>
            )}
            <div className=" mt-6 relative font-mons text-xl text-center orangeBtn rounded-lg flex text-black">
              <div
                className="px-4 py-2"
                style={{
                  filter: "drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.25))",
                }}
              >
                Browse
              </div>
            </div>
          </div>
          {/* uploading image div */}
        </div>

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
        {/* submit button */}
      </form>
    </div>
  );
};

export default UploadImage;
