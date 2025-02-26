import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-full w-full flex justify-center items-center mb-20">
      <div className="flex flex-col w-[95%] h-fit md:flex-row mt-10 bg-black md:h-[550px] md:w-[1200px] rounded-3xl gap-20 md:gap-0 md:items-center md:justify-between outline-2 md:outline-4 outline-amber-300">
        <div className="w-1/2 h-full  rounded-l-3xl">
          <p className="mt-8 pl-5 md:pl-0 md:ml-15 text-5xl md:text-6xl text-white">
            Sign In
          </p>
        </div>
        <div className="md:w-1/2 md:h-full md:mt-52 rounded-r-3xl mb-8">
          <form action="" className="ml-5 flex flex-col">
            <div className="flex flex-col  gap-1">
              <label htmlFor="Email" className="text-2xl md:text-3xl text-white">
                Email
              </label>
              <input className=" h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"></input>
            </div>
            <div className="flex flex-col mt-10 gap-1">
              <label htmlFor="password" className="text-2xl md:text-3xl text-white">
                Password
              </label>
              <input
                className="h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"
                type="password"
              ></input>
            </div>
            <div className="flex flex-col mt-10 gap-1">
              <button className="bg-[#D9D9D9] h-12 w-32 cursor-pointer rounded-4xl text-2xl hover:bg-amber-100 transition-colors">
                Sign In
              </button>
            </div>
            <div className="flex flex-row mt-10 gap-4">
              <p className="text-white">
                New to Wagging tails?{" "}
                <Link to="/Sign-Up" className="text-blue-300">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
