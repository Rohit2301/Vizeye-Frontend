import React from "react";
import AutoSelectFill from "../../../utils/mui/text-to-speech/autocomplete";

const languageOption = [
  { label: "English US", yr: 300 },
  { label: "English UK", yr: 330 },
  { label: "French", yr: 400 },
];

const TextToSpeech = () => {
  return (
    <div className="relative w-full h-screen bgBlue flex flex-col items-center justify-center gap-y-14 py-12">
      {/* text div */}
      <div className="relative flex flex-col justify-content items-center text-white gap-y-8">
        <div className="text-6xl font-sansationR">
          Put Text-to-speech into action
        </div>
        <div className="text-base font-ptSerifR w-3/4 text-center">
          Accurately convert speech into text with an API powered by the best of
          Google’s AI research and technology.
        </div>
      </div>
      {/* text div */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          {<AutoSelectFill data={languageOption} />}
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
