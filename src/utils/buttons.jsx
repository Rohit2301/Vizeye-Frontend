import "../../src/index.css";

const NavGetStartedBtn = () => {
  return (
    <div>
      <div className="navGetStartedBtn px-3 py-1" data="Get Started"></div>
    </div>
  );
};
const HomeGetStartedBtn = ({ data, children }) => {
  return (
    <div className="relative font-mons text-xl text-center orangeBtn rounded-lg">
      <button className="px-4 py-3">
        {data}
        {children}
      </button>
    </div>
  );
};

export { HomeGetStartedBtn };
export { NavGetStartedBtn };
