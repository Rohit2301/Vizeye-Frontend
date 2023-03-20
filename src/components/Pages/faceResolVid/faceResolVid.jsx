import React, { useRef } from "react";
import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import * as tf from "@tensorflow/tfjs";
import * as canvas from "canvas";
import { useSelector } from "react-redux";

const FaceExpResolver = () => {
  const imgRef = useRef();
  const canvaRef = useRef();
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
    const loadModels = () => {
      Promise.allSettled([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ])
        .then((values) => {
          handleDetections();
        })
        .catch((e) => {
          console.log(e);
        });
    };

    imgRef.current && loadModels();
  }, []);

  return (
    <div className="relative w-full h-screen darkBlueBg flex flex-col items-center justify-center gap-y-14 py-12">
      <div className="relative w-[45%] h-3/4 flex items-between justify-center">
        <img
          crossOrigin="anonymous"
          src={url}
          alt="demoImage"
          ref={imgRef}
          className="w-[800px] h-[450px] relative object-contain"
          draggable="false"
        ></img>
        <canvas
          className="w-[800px] h-[450px] z-[10] absolute top-[0px] left-[0px]"
          ref={canvaRef}
        ></canvas>
      </div>
    </div>
  );
};

export default FaceExpResolver;
