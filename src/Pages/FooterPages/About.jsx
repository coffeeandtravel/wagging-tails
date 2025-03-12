import "./About.css";

const About = () => {
  return (
    <div className="h-[100%] w-[99%]">
        <div className="flex justify-center items-center my-10 ">
        <div className="background lg:w-[800px] h-[100%] w-[90%] lg:h-[600px] rounded-3xl flex justify-center items-center">
            <div className="h-[90%] w-[90%] bg-white/10 backdrop-blur-3xl rounded-3xl border-t-2 border-r-2 flex justify-center items-center border-r-white/20 border-t-white/20">
                <div>
                    <h1 className="text-6xl text-white/75"> Hello.</h1>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default About;
