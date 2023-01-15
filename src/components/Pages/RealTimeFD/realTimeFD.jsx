import React, { useRef } from "react";
import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import * as tf from "@tensorflow/tfjs";
import demoImage from "../../../assets/images/download.jpg";
import { HomeGetStartedBtn } from "../../../utils/buttons";
import * as canvas from "canvas";
import Webcam from "react-webcam";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RealTimeFD = () => {
  const imgRef = useRef();
  const canvaRef = useRef();
  const { state } = useLocation();
  const { url } = useSelector((state) => state.uploadedImage);

  const handleDetections = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    canvaRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvaRef.current, {
      width: 800,
      height: 450,
    });
    const resized = faceapi.resizeResults(detections, {
      width: 800,
      height: 450,
    });
    faceapi.draw.drawDetections(canvaRef.current, resized);
  };

  useEffect(() => {
    console.log(state);
    const loadModels = () => {
      Promise.allSettled([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ])
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
    <div className="relative w-full h-screen bgBlue flex flex-col items-center justify-center gap-y-14 py-12">
      <div className="relative w-[45%] h-3/4 flex items-between justify-center">
        {/* <Webcam
          audio={false}
          ref={imgRef}
          className="w-[800px] h-[450px] relative" 
        /> */}
        <img
          crossOrigin="anonymous"
          src={url}
          alt="demoImage"
          ref={imgRef}
          className="w-[800px] h-[450px] relative object-contain"
        ></img>
        <canvas
          className="w-[800px] h-[450px] z-[10] absolute top-[0px] left-[0px]"
          ref={canvaRef}
        ></canvas>
      </div>
      <div className="flex items-between justify-center gap-x-40">
        <div className="">{<HomeGetStartedBtn data={"Start Video"} />}</div>
        <div className="">{<HomeGetStartedBtn data={"Start Video"} />}</div>
      </div>
    </div>
  );
};

export default RealTimeFD;
