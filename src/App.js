import Home from "./components/Home/home";
import Header from "./components/Layouts/Header/header";
import UploadImage from "./components/Pages/uploadImage/UploadImage";
import RealTimeFD from "./components/Pages/RealTimeFD/realTimeFD";
import Error from "./components/Pages/404/404";
import TextToSpeech from "./components/Pages/text-to-speech/text-to-speech";
import SpeechToText from "./components/Pages/speechToText/speechToText";
import ListeningTtS from "./components/Pages/text-to-speech/listeningTtS";
import FindYourText from "./components/Pages/findYourText/findYourText";
import FaceExpResolver from "./components/Pages/faceExpResolv/faceExpResolv";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/Pages/signup";
import SignIn from "./components/Pages/signin";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="h-[3.56rem]" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realTimeFd" element={<RealTimeFD />} />
          <Route path="/faceExpResolver" element={<FaceExpResolver />} />
          <Route path="/uploadImage" element={<UploadImage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/textToSpeech" element={<TextToSpeech />} />
          <Route path="/speechToText" element={<SpeechToText />} />
          {/* <Route  path="/" element={<ListeningTtS />} /> */}
          {/* <Route  path="/" element={<FindYourText />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
