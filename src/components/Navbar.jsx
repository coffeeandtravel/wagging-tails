import "./Navbar.css";
import icon from "../assets/Ellipse1.jpg";
import { useState } from "react";
import { motion } from "motion/react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className="w-full bg-[#EFEFEF] h-16 flex items-center justify-between text-center sticky top-0 z-1">
      <div>
        <a
          href="#"
          className="navbarHeading w-fit ml-4 lg:ml-8 pr-1 h-12 text-3xl lg:text-4xl"
        >
          Wagging Tails
        </a>
      </div>
      <div className="flex flex-row justify-between items-center gap-5 mr-4 md:mr-15">
        <button className="bg-[#D9D9D9] w-44 rounded-full h-12 buttons text-xl hidden md:block cursor-pointer ">
          Adopt a soul.
        </button>
        <button className="bg-[#D9D9D9] w-48 rounded-full h-12 buttons text-xl hidden md:block cursor-pointer ">
          List an adoption.
        </button>
        <div className="h-12 w-12 rounded-full bg-slate-600 flex justify-center align-center items-center ml-0 lg:ml-10">
          <button onClick={userOpen} className="cursor-pointer">
            <img
              src={icon}
              className="h-[45px] w-[45px] rounded-full z-100"
              alt=""
            />
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          className="absolute top-14 md:top-14 right-5 md:right-9 h-44 md:h-30 w-[90%] md:w-100 rounded-b-3xl bg-[#EFEFEF]  flex align-top justify-end text-right flex-col"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 8, opacity: 100 }}
        >
          <div className="flex flex-row md:hidden  justify-center gap-2 ">
          <button className="bg-[#D9D9D9] w-44 rounded-full h-12 buttons text-xl ml-2 md:block cursor-pointer ">
          Adopt a soul.
        </button>
        <button className="bg-[#D9D9D9] w-48 rounded-full h-12 buttons text-xl mr-2 md:block cursor-pointer ">
          List an adoption.
        </button>
          </div>
          <ul className="mr-5 mt-2 mb-2">
            <li className="text-3xl hover:text-amber-500 transition-colors">Your Posts</li>
            <li className="text-3xl hover:text-amber-500 transition-colors">Sign Out</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
