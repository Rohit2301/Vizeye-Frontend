import UserSpeakingIcon from "../../../assets/images/user-speaking-icon.png";
import { SpeechToTextStopBtn } from "../../../utils/buttons";
import SpeechToTextTimer from "../../../utils/mui/speechToText/timer";

const ListeningTtS = () => {
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
      {/* modal fro listening */}
      <div className="realtive flex gap-x-52 items-center">
        <div className="w-16">
          <img
            src={UserSpeakingIcon}
            alt="userSpeakingIcon"
            draggable="false"
          />
        </div>
        <div className="realtive flex gap-x-8 items-center">
          <div className="text-white">{<SpeechToTextTimer />}</div>
          <div>
            {<SpeechToTextStopBtn data="Stop" icon={true} text="white" />}
          </div>
        </div>
      </div>
      {/* modal fro listening */}
    </div>
  );
};

export default ListeningTtS;
