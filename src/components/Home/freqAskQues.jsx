import DownArrow from "../../assets/images/downArrowCircleBg.png";
const FreqAskedQues = () => {
  return (
    <div className="flex flex-col lightbg py-16 px-28 text-center text-black gap-y-8 items-center">
      <div className="text-5xl font-sansationR">Frequently Asked Questions</div>
      <div
        className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20"
        style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))" }}
      >
        <div className="font-mons text-lg ">
          Can I take change the language in text to speech
        </div>
        <div className="w-8">
          <img src={DownArrow} alt="down arrow" />
        </div>
      </div>
      <div
        className="flex rounded-lg bg-[#C6D6DE] items-center py-3 px-6 gap-x-20"
        style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))" }}
      >
        <div className="font-mons text-lg w-[35rem]">
          Can I take change the language in text to speech. Can I take change
          the language in text to speech
        </div>
      </div>
      <div
        className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20"
        style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))" }}
      >
        <div className="font-mons text-lg ">
          Can I take change the language in text to speech
        </div>
        <div className="w-8">
          <img src={DownArrow} alt="down arrow" />
        </div>
      </div>
      <div
        className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20"
        style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))" }}
      >
        <div className="font-mons text-lg ">
          Can I take change the language in text to speech
        </div>
        <div className="w-8">
          <img src={DownArrow} alt="down arrow" />
        </div>
      </div>
      <div
        className="flex rounded-lg bg-[#83A6B8] items-center py-3 px-6 gap-x-20"
        style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.35))" }}
      >
        <div className="font-mons text-lg ">
          Can I take change the language in text to speech
        </div>
        <div className="w-8">
          <img src={DownArrow} alt="down arrow" />
        </div>
      </div>
    </div>
  );
};

export default FreqAskedQues;
