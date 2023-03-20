import { TextToSpeechStartNowBtn } from "../../../utils/buttons";
import InputTypeTtS from "../../../utils/mui/speechToText/radioBtn";
import AutoSelectFill from "../../../utils/mui/text-to-speech/autocomplete";

const languageOption = [
  { label: "English US", yr: 300 },
  { label: "English UK", yr: 330 },
  { label: "French", yr: 400 },
];

const SpeechToText = () => {
  return (
    <div className="relative w-full h-screen darkBlueBg flex flex-col items-center gap-y-14 py-12 px-20">
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
      {/* every options */}
      <div className="realtive flex flex-col gap-y-6 ">
        <div>{<InputTypeTtS />}</div>
        <div>{<AutoSelectFill data={languageOption} label="Language" />}</div>
        <div className="realtive flex justify-center mt-4">
          <div className="w-40">
            {
              <TextToSpeechStartNowBtn
                data="Start Now"
                icon={true}
                text="white"
              />
            }
          </div>
        </div>
      </div>
      {/* every options */}
    </div>
  );
};

export default SpeechToText;
