import "./Navbar.css";
import icon from "../assets/Ellipse1.jpg";
const Navbar = () => {
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
      <div className="flex flex-row justify-between items-center gap-10 mr-4 md:mr-15">
        <button className="bg-[#D9D9D9] w-44 rounded-full h-12 font-bold text-xl hidden md:block cursor-pointer hover:bg-amber-400 transition">
          Adopt a soul.
        </button>
        <button className="bg-[#D9D9D9] w-48 rounded-full h-12 font-bold text-xl hidden md:block cursor-pointer hover:bg-amber-400 transition">
          List an adoption.
        </button>
        <div className="h-12 w-12 rounded-full bg-slate-600 flex justify-center align-center items-center">
          <button>
            <img
              src={icon}
              className="h-[45px] w-[45px] rounded-full z-100"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
