import { TextField } from "@mui/material";
import React from "react";
import { TextToSpeechStartNowBtn } from "../../../utils/buttons";
import AutoSelectFill from "../../../utils/mui/text-to-speech/autocomplete";
import TSslider from "../../../utils/mui/text-to-speech/slider";
import TextToSpeechTextField from "../../../utils/mui/text-to-speech/textField";

const languageOption = [
  { label: "English US", yr: 300 },
  { label: "English UK", yr: 330 },
  { label: "French", yr: 400 },
];

const TextToSpeech = () => {
  return (
    <div className="relative w-full darkBlueBg flex flex-col items-center gap-y-14 py-12 px-20">
      {/* text div */}
      <div className="relative flex flex-col justify-content items-center text-white gap-y-16">
        <div className="text-5xl font-sansationR">
          Put Text-to-speech into action
        </div>
        <div className="font-ptSerifR text-lg text-center">
          Accurately convert speech into text with an API powered by the best of
          Google’s AI research and technology.
        </div>
      </div>
      {/* text div */}
      {/* every option regarding text to speech */}
      <div className=" realtive flex flex-col items-center justify-center gap-y-10">
        {/* options of speech */}
        <div className="relative flex items-center justify-start gap-20">
          {<AutoSelectFill data={languageOption} label={"Language/Locale"} />}
          {<AutoSelectFill data={languageOption} label={"Voice Name"} />}
          {<AutoSelectFill data={languageOption} label={"Voice Type"} />}
        </div>
        {/* options of speech */}
        {/* options of speed/pitch */}
        <div className="relative flex items-start gap-x-20 w-full">
          <div>{<TSslider label={"Speed"} />}</div>
          <div>{<TSslider label={"Pitch"} />}</div>
        </div>
        {/* options of speed/pitch */}
        {/* start NOw btn */}
        <div className="w-full flex gap-x-20">
          <div className="w-[19rem]"></div>
          <div className="w-[19rem]"></div>
          <div className="realtive">
            {
              <TextToSpeechStartNowBtn
                data="Start Now"
                text="white"
                icon={true}
              />
            }
          </div>
        </div>
        {/* start NOw btn */}
      </div>
      {/* every option regarding text to speech */}
      {/* text field to paste text */}
      <div className="realtive w-[80%] mt-10">{<TextToSpeechTextField />}</div>
      {/* text field to paste text */}
    </div>
  );
};

export default TextToSpeech;
