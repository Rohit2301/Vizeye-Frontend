import aiFace from "../../assets/images/ai face.png";

const AiFace = () => {
  return (
    <div className="absolute right-[1rem] top-[-3rem]">
      <img src={aiFace} alt="Ai face" className="w-[60rem] h-[46rem]" />
      <div
        className="absolute h-16 w-[43rem] right-[-1rem] top-[44rem] rounded-[50%]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #1E68AC 0%, rgba(32, 113, 88, 0.66) 100%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};
export default AiFace;
