import React, { useRef } from "react";
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as faceapi from "face-api.js";
// import * as canvas from "canvas";
import demoImage from "../../../assets/images/demoImage.jpg";
import { HomeGetStartedBtn } from "../../../utils/buttons";

const RealTimeFD = () => {
  const imgRef = useRef();
  const canvaRef = useRef();

  const handleDetections = async () => {
    const detections = await faceapi.detectAllFaces(imgRef);
    const detections2 = await faceapi.detectAllFaces(
      imgRef,
      new faceapi.TinyFaceDetectorOptions()
    );
    console.log(detections2);
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.allSettled([faceapi.nets.tinyFaceDetector.loadFromUri("/models")])
        .then((values) => {
          console.log(values);
          handleDetections();
        })
        .catch((e) => {
          console.log(e);
        });
    };

    imgRef.current && loadModels();
  }, []);

  return (
    <div className="relative mt-[-1.5rem] w-full h-screen bgBlue flex flex-col items-center justify-center gap-y-14 py-12">
      <div
        className="relative w-[45%] h-3/4 flex items-between justify-center"
        ref={canvaRef}
      >
        {/* <Webcam audio={false} className="" /> */}
        <img
          src={demoImage}
          alt="demoImage"
          ref={imgRef}
          className="w-full h-full relative"
        ></img>
        <canvas className="w-full h-full z-[-10] absolute"></canvas>
      </div>
      <div className="flex items-between justify-center gap-x-40">
        <div className="">{<HomeGetStartedBtn data={"Start Video"} />}</div>
        <div className="">{<HomeGetStartedBtn data={"Start Video"} />}</div>
      </div>
    </div>
  );
};

export default RealTimeFD;
