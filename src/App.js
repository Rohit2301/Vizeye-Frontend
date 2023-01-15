import Home from "./components/Home/home";
import Header from "./components/Layouts/Header/header";
import UploadImage from "./components/Pages/uploadImage/UploadImage";
import RealTimeFD from "./components/Pages/RealTimeFD/realTimeFD";
import Error from "./components/Pages/404/404";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/real" element={<RealTimeFD />} />
          <Route exact path="/" element={<UploadImage />} />
          {/* <Route exact path="/" element={<Error />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
