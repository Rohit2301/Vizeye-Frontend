import { useEffect, useState } from "react";

const SpeechToTextTimer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (sec < 59) {
        setSec(sec + 1);
      } else {
        setSec(0);
        setMin(min + 1);
      }
    }, 1000);
  });

  return (
    <div className="text-white flex text-xl">
      <div>{min < 10 ? "0" + min : min}:</div>
      <div>{sec < 10 ? "0" + sec : sec}</div>
    </div>
  );
};

export default SpeechToTextTimer;
