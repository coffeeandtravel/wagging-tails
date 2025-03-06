import { Link } from "react-router-dom"
import google from '../../assets/google.svg'
import './sing.css'
import { useState } from "react"
const SignUp = () => {
    const [error, setError] = useState("");
    const [mError, setMerror]=useState("");
    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;

        const mail = form.mail.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(mail,password,confirmPassword);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(password !== confirmPassword){
            setError("Passwords don't Match");
            return;
        }
        if(!emailRegex.test(mail)) {
            setMerror("Please enter a valid email address.");
            return; // Stop further execution if email is invalid
        }
        setError("");
        setMerror("");
    }

  return (
    <div className="min-h-full w-full flex justify-center items-center mb-20">
    <div className="flex flex-col w-[95%] h-fit md:flex-row mt-10 bg-black md:h-[800px] md:w-[1200px] rounded-3xl gap-20 md:gap-0 md:items-center md:justify-between outline-4 md:outline-4 outline-amber-300">
      <div className="w-1/2 h-full  rounded-l-3xl">
        <p className="mt-8 lg:mt-20 pl-5 md:pl-0 md:ml-15 text-5xl md:text-6xl text-white">
          Sign Up
        </p>
      </div>
      <div className="md:w-1/2 md:h-full md:mt-52 rounded-r-3xl mb-8">
        <form action="" className="ml-5 flex flex-col" onSubmit={handleSignUp}>
            <button className="h-14 w-[95%] md:w-[80%] bg-white mb-10 rounded-full flex flex-row items-center gap-1  justify-center cursor-pointer hover:bg-white/90 transition-colors transform-fill" >
            <img src={google} alt="" className="h-8 w-10"/><p className=" text-xl lg:text-2xl google-font">Sign up with Google </p>
            </button>
          <div className="flex flex-col  gap-1">
            <label htmlFor="Email" className="text-2xl md:text-3xl text-white">
              Email
            </label>
            <input className={mError?" h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl border-2 border-red-500":" h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"} name="mail"></input>
          </div>
          <div className="flex flex-col mt-10 gap-1">
            <label htmlFor="password" className="text-2xl md:text-3xl text-white">
              Password
            </label>
            <input
              className={error?"h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl border-2 border-red-500":"h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"}
              type="password"
              name="password"
            ></input>
          </div>
          <div className="flex flex-col mt-10 gap-1">
            <label htmlFor="confirmPassword" className="text-2xl md:text-3xl text-white">
              Confirm Password
            </label>
            <input
              className={error?"h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl border-2 border-red-500":"h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"}
              type="password"
              name="confirmPassword"
            ></input>
          </div>
          <div>
            <p className="text-red-600">{error}  {mError}</p>
          </div>
          <div className="flex flex-row mt-10 gap-4">
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/Sign-in" className="text-blue-300">
                Sign in.
              </Link>
            </p>
          </div>
          <div className="flex flex-col mt-10 gap-1">
            <button className="bg-[#D9D9D9] h-12 w-32 cursor-pointer rounded-4xl text-2xl hover:bg-amber-100 transition-colors" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp
