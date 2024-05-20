import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { useState } from "react";

const NavIcon = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`${
          toggle ? "scale-1" : "scale-0"
        } fixed w-full flex justify-center z-20 bottom-8 transition-all duration-300`}
      >
        <div className="flex bg-black rounded-xl p-4">
          <div className="flex gap-5 rounded-full">
            <a
              href="#"
              className="text-xl text-white inline-block bg-glass p-2 rounded-sm"
            >
              <AiFillHome />
            </a>
            <a
              href="#"
              className="text-xl text-white inline-block bg-glass p-2 rounded-sm"
            >
              <MdExplore />
            </a>
            <a
              href="#"
              className="text-xl text-white inline-block bg-glass p-2 rounded-sm"
            >
              <GiBowlOfRice />
            </a>
            <a
              href="#"
              className="text-xl text-white inline-block bg-glass p-2 rounded-sm"
            >
              <MdContactPage />
            </a>
          </div>
        </div>
      </div>
      <div
        className="fixed right-0 top-[20%] z-20 cursor-pointer bg-black"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <RxDashboard className="text-3xl text-white" />
      </div>
    </>
  );
};

export default NavIcon;
