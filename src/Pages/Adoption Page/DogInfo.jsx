import image from "../../assets/adopt1.jpg";
import image1 from "../../assets/adopt2.jpg";
import image2 from "../../assets/Adopt.jpg";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLoaderData } from "react-router-dom";

const DogInfo = () => {
  const [info, setInfo] = useState([]);
  // const images = [image,image1, image2];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    fetch("http://192.168.29.131:3000/users/67c2b35935f66c562195aa55")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }, []);


  const {  name, description, age, images, location, ownerName, gender, contactNumber} = useLoaderData();
  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  
  return (
    <div className="">
      <div className=" w-[100%] md:w-[100%] lg:w-[100%] flex justify-center ">
        <div className="bg-black h-fit py-5 pb-20 w-[97%] rounded-4xl border-white border-3 z-10 lg:border-4 flex flex-col gap-10 lg:gap-5 my-10">
          <div className=" max-h-full h-full w-full my-2 flex flex-col lg:flex-row justify-center items-center">
            <div className="flex sticky max-h-[500px] h-150 w-[95%] lg:w-[100%] rounded-[30px] max-w-full lg:ml-10 lg:mt-2 bg-[images] justify-center items-center p-4 lg:p-10 gap-10">
              <div className="h-10 lg:h-12 w-10 lg:w-12 absolute rounded-full right-2 bg-white/20 backdrop-blur flex items-center justify-center cursor-pointer z-10" onClick={handleNext}> <img src={right} alt="" className="h-[20px] w-[20px]" /></div>
              <div className="h-10 lg:h-12 w-10 lg:w-12 absolute rounded-full left-2 bg-white/20 backdrop-blur flex items-center justify-center cursor-pointer z-10" onClick={handlePrev}> <img src={left} alt="" className="h-[20px] w-[20px]" /></div>
              <AnimatePresence mode='wait'>
              <motion.img
                src={images[currentImage]}
                alt=""
                className="max-h-full max-w-full rounded-lg transition-discrete transform-fill transition-image drop-shadow-2xl"
                initial={{ opacity: 0, x: 50 }} // Start hidden and slightly off-screen
                animate={{ opacity: 1, x: 0 }} // Fade in and move to center
                exit={{ opacity: 0, x: -50 }} // Slide out to the left when changing
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-5 justify-center h-[100%] w-full pl-6 pt-5">
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Name:<span className="text-white ml-1">{name}</span>
              </p>
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Age:<span className="text-white ml-1">{age}</span>
              </p>
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Gender:<span className="text-white ml-1">{gender}</span>
              </p>
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Location:<span className="text-white ml-1">{location}</span>
              </p>
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Time:<span className="text-white ml-1">5 Hours ago.</span>
              </p>
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Owner{`'`}s Name:
                <span className="text-white ml-1">{ownerName}</span>
              </p>
              <p className="text-3xl md:text-4xl text-[#FABB0E]">
                Contact:<span className="text-white ml-1">{contactNumber}</span>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <div className=" h-[400px] w-[100%] lg:w-[94%] bg-[#1F1F1F] lg:rounded-2xl">
              <div>
                <h3 className="text-white pl-7 pt-5  lg:py-6 text-4xl border-b-white border-b-3">
                  About:
                </h3>
              </div>
              <div className="text-xl text-white p-8"> {description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogInfo;
