import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/userSlice";
import DemoProfileAvatar from "../../../assets/images/profile avataar.png";
import { auth } from "../../../firebase";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useState } from "react";

const ProfileModal = ({ showModal, setShowModal }) => {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const ref = useDetectClickOutside({
    onTriggered: () => {
      if (showModal && show) {
        setShow(false);
        setShowModal(false);
      }
      if (showModal && !show) {
        setShow(true);
        console.log("triggered");
      }
    },
  });
  const handleSignOut = () => {
    dispatch(logOut({ auth }));
  };
  return (
    <div
      ref={ref}
      className="flex flex-col px-6 py-7 items-center justify-center gap-y-2 text-xl font-mons rounded-md"
      style={{
        background: "linear-gradient(90deg, #000723 0%, #001839 100%)",
        backdropFilter: "blur(200px)",
      }}
    >
      <div className="w-24 mb-3">
        <img
          src={DemoProfileAvatar}
          alt="Profile Pic"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>{user.user.name}</div>
      <div className="h-[1px] bg-[#939090] w-[100%]" />
      <div className="">{user.user.email}</div>
      <div className="h-[1px] bg-[#939090] w-[100%]" />
      <div
        className="relative font-mons text-xl text-center orangeBtn rounded-lg flex mt-4"
        onClick={handleSignOut}
      >
        <button className="px-2 py-1">Sign Out</button>
      </div>
    </div>
  );
};

export default ProfileModal;
