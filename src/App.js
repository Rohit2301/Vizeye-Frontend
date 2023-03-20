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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/realtimefd" element={<RealTimeFD />} />
          <Route exact path="/faceExpResolver" element={<FaceExpResolver />} />
          <Route exact path="/uploadImage" element={<UploadImage />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />
          {/* <Route exact path="/" element={<TextToSpeech />} /> */}
          {/* <Route exact path="/" element={<SpeechToText />} /> */}
          {/* <Route exact path="/" element={<ListeningTtS />} /> */}
          {/* <Route exact path="/" element={<FindYourText />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
