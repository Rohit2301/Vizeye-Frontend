import Home from "./components/Home/home";
import Header from "./components/Layouts/Header/header";
import UploadImage from "./components/Pages/uploadImage/UploadImage";
import RealTimeFD from "./components/Pages/RealTimeFD/realTimeFD";
import Error from "./components/Pages/404/404";
import TextToSpeech from "./components/Pages/text-to-speech/text-to-speech";
import SpeechToText from "./components/Pages/speechToText/speechToText";
import ListeningTtS from "./components/Pages/text-to-speech/listeningTtS";
import FindYourText from "./components/Pages/findYourText/findYourText";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exact path="/" element={<RealTimeFD />} /> */}
          {/* <Route exact path="/" element={<UploadImage />} /> */}
          {/* <Route exact path="/" element={<Error />} /> */}
          {/* <Route exact path="/" element={<TextToSpeech />} /> */}
          {/* <Route exact path="/" element={<SpeechToText />} /> */}
          {/* <Route exact path="/" element={<ListeningTtS />} /> */}
          <Route exact path="/" element={<FindYourText />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
