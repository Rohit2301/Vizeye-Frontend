import "../../src/index.css";

const NavGetStartedBtn = () => {
  return (
    <div>
      <div className="navGetStartedBtn px-3 py-1" data="Get Started"></div>
    </div>
  );
};
const HomeGetStartedBtn = ({ data }) => {
  return (
    <div className="font-mons text-xl text-center">
      <div
        className="px-4 py-3"
        style={{
          background:
            "linear-gradient(95.91deg, rgba(227, 116, 71, 0.995464) -5.5%, #F56F46 52.62%, rgba(255, 86, 29, 0.99) 97.73%)",
          borderRadius: "8px",
        }}
      >
        {data}
      </div>
    </div>
  );
};

export { HomeGetStartedBtn };
export { NavGetStartedBtn };
