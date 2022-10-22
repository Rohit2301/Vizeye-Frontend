import Logo from "../../../assets/Logo.png";
import { NavGetStartedBtn } from "../../../utils/buttons";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 py-3 px-8 w-full z-[100] h-[3.56rem]">
      {/* navbar container */}
      <div className="w-full flex justify-between items-center relative">
        {/* logo container */}
        <div className="w-[9rem]">
          <img
            src={Logo}
            alt="EyeViz Logo"
            className="h-full w-full object-contain"
            draggable="false"
          ></img>
        </div>
        {/* logo container */}
        {/* right navbar elements */}
        <div className="flex justify-between items-center relative gap-14 px-2">
          <div>Features</div>
          <div>Docs</div>
          <div>User Guide</div>
          <div>Sign Up</div>
          <div>{<NavGetStartedBtn />}</div>
        </div>
        {/* right navbar elements */}
      </div>
      {/* navbar container */}
    </header>
  );
};

export default Header;
