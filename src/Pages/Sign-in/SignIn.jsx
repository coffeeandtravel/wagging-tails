import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/google.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Navbar from "../../components/Navbar";

const SignIn = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signIn = async (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;
    const mail = form.mail.value;
    const password = form.password.value;

    // console.log("Email:", mail, "Password:", password); // Debugging output
    try {
      return await login(mail, password);
    } catch (error) {
      if(error.message == "Firebase: Error (auth/invalid-credential).")
      setError("Wrong Email or Password.");
    }
    navigate('/');
  };
  const googleLogin = async () => {
    try {
      await loginWithGoogle();
      console.log("User Signed in successfully.")
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-full w-full flex justify-center items-center mb-20">
      <div className="flex flex-col w-[95%] h-fit md:flex-row mt-10 bg-black md:h-[650px] md:w-[1200px] rounded-3xl gap-20 md:gap-0 md:items-center md:justify-between outline-4 md:outline-4 outline-amber-300">
        <div className="w-1/2 h-full  rounded-l-3xl">
          <p className="mt-8 pl-5 md:pl-0 md:ml-15 text-5xl md:text-6xl text-white">
            Sign In
          </p>
        </div>
        <div className="md:w-1/2 md:h-full md:mt-52 rounded-r-3xl mb-8">
          <form action="" className="ml-5 flex flex-col" onSubmit={signIn}>
            <button
              className="h-14 w-[95%] md:w-[80%] bg-white mb-10 rounded-full flex flex-row items-center gap-1 justify-center cursor-pointer hover:bg-white/90 transition-all duration-200"
              onClick={googleLogin}
            >
              <img src={google} alt="" className="h-8 w-10" />
              <p className=" text-xl lg:text-2xl google-font">
                Sign in with Google{" "}
              </p>
            </button>
            <div className="flex flex-col  gap-1">
              <label
                htmlFor="Email"
                className="text-2xl md:text-3xl text-white"
              >
                Email
              </label>
              <input
                className={
                  error
                    ? "h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl border-2 border-red-600"
                    : "h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"
                }
                name="mail"
              ></input>
            </div>
            <div className="flex flex-col mt-10 gap-1">
              <label
                htmlFor="password"
                className="text-2xl md:text-3xl text-white"
              >
                Password
              </label>
              <input
                className={error
                  ? "h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl border-2 border-red-600"
                  : "h-12 md:h-14 w-[95%] md:w-[80%] bg-[#D9D9D9] rounded-lg px-2 text-xl"
              }
                type="password"
                name="password"
              ></input>
            </div>
            <div className="h-2 w-full mt-2">
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="flex flex-col mt-10 gap-1">
              <button
                className="bg-[#D9D9D9] h-12 w-32 cursor-pointer rounded-4xl text-2xl hover:bg-amber-100 transition-colors"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="flex flex-row mt-10 gap-4">
              <p className="text-white">
                New to Wagging tails?{" "}
                <Link to="/Sign-up" className="text-blue-300">
                  Sign up.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
