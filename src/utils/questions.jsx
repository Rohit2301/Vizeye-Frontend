import { useState } from "react";
import DownArrow from "../assets/images/downArrowCircleBg.png";

const Questions = () => {
  const [showa, setShowa] = useState(false);
  const [showb, setShowb] = useState(false);
  const [showc, setShowc] = useState(false);
  const [showd, setShowd] = useState(false);
  const [showe, setShowe] = useState(false);
  return (
    <div className="relative flex flex-col gap-y-4">
      {/* ------------------------------------------------------------------------ */}
      <div className="">
        <div
          className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20 cursor-pointer"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))",
          }}
          onClick={() => {
            setShowa(!showa);
          }}
        >
          <div className="font-mons text-lg ">
            Can I take change the language in text to speech
          </div>
          <div
            className={`w-8 ${showa ? "rotate-180 delay-150 ease-in-out" : ""}`}
          >
            <img src={DownArrow} className="rotate-180" alt="down arrow" />
          </div>
        </div>
        {showa ? (
          <div
            className="flex rounded-lg bg-[#C6D6DE] items-center py-3 px-6 gap-x-20 mt-2"
            style={{
              filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          >
            <div className="font-mons text-lg w-[35rem]">
              Can I take change the language in text to speech. Can I take
              change the language in text to speech
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------ */}
      <div>
        <div
          className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20 cursor-pointer"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))",
          }}
          onClick={() => {
            setShowb(!showb);
          }}
        >
          <div className="font-mons text-lg ">
            Can I take change the language in text to speech
          </div>
          <div
            className={`w-8 ${showb ? "rotate-180 delay-150 ease-in-out" : ""}`}
          >
            <img src={DownArrow} className="rotate-180" alt="down arrow" />
          </div>
        </div>
        {showb ? (
          <div
            className="flex rounded-lg bg-[#C6D6DE] items-center py-3 px-6 gap-x-20 mt-2"
            style={{
              filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          >
            <div className="font-mons text-lg w-[35rem]">
              Can I take change the language in text to speech. Can I take
              change the language in text to speech
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------ */}
      <div>
        <div
          className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20 cursor-pointer"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))",
          }}
          onClick={() => {
            setShowc(!showc);
          }}
        >
          <div className="font-mons text-lg ">
            Can I take change the language in text to speech
          </div>
          <div
            className={`w-8 ${showc ? "rotate-180 delay-150 ease-in-out" : ""}`}
          >
            <img src={DownArrow} className="rotate-180" alt="down arrow" />
          </div>
        </div>
        {showc ? (
          <div
            className="flex rounded-lg bg-[#C6D6DE] items-center py-3 px-6 gap-x-20 mt-2"
            style={{
              filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          >
            <div className="font-mons text-lg w-[35rem]">
              Can I take change the language in text to speech. Can I take
              change the language in text to speech
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------ */}
      <div>
        <div
          className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20 cursor-pointer"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))",
          }}
          onClick={() => {
            setShowd(!showd);
          }}
        >
          <div className="font-mons text-lg ">
            Can I take change the language in text to speech
          </div>
          <div
            className={`w-8 ${showd ? "rotate-180 delay-150 ease-in-out" : ""}`}
          >
            <img src={DownArrow} className="rotate-180" alt="down arrow" />
          </div>
        </div>
        {showd ? (
          <div
            className="flex rounded-lg bg-[#C6D6DE] items-center py-3 px-6 gap-x-20 mt-2"
            style={{
              filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          >
            <div className="font-mons text-lg w-[35rem]">
              Can I take change the language in text to speech. Can I take
              change the language in text to speech
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------ */}
      <div>
        <div
          className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20 cursor-pointer"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))",
          }}
          onClick={() => {
            setShowe(!showe);
          }}
        >
          <div className="font-mons text-lg ">
            Can I take change the language in text to speech
          </div>
          <div
            className={`w-8 ${showe ? "rotate-180 delay-150 ease-in-out" : ""}`}
          >
            <img src={DownArrow} className="rotate-180" alt="down arrow" />
          </div>
        </div>
        {showe ? (
          <div
            className="flex rounded-lg bg-[#C6D6DE] items-center py-3 px-6 gap-x-20 mt-2"
            style={{
              filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          >
            <div className="font-mons text-lg w-[35rem]">
              Can I take change the language in text to speech. Can I take
              change the language in text to speech
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Questions;
