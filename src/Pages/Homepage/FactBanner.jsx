import "./Banner.css";
// import fact from '../../assets/fact.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const FactBanner = () => {
    const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <motion.div className=" mt-5" style={{opacity, y}}>
      <div className=" flex items-center justify-center">
        <div className="h-[860px] w-[94%] md:h-[600px] md:w-[906px] bg-black rounded-3xl flex md:gap-20 items-center mb-12 p-5 flex-col md:flex-row-reverse justify-between">
          <motion.div className="fact h-[500px] w-full md:h-full md:w-1/2 mt-3 rounded-3xl flex items-center justify-center" initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="h-[440px] w-11/12 linear md:hidden rounded-3xl flex gap-45 flex-col">
              <p className="text-xl pl-4 pt-5">
                Over 30 Million Stray Dogs <br /> Roam the Streets of India
              </p>
              <p className="text-xl pl-4 pt-5">
                Give them a <br /> Loving Home
              </p>
            </div>
          </motion.div>
          <motion.div className="block md:hidden" initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <p className="text-white text-justify">{`"In India, millions of stray dogs struggle to survive on the streets, often facing hunger, illness, and the dangers of traffic. Despite their tough lives, many of these resilient dogs are incredibly loving and loyal, waiting for a chance to find a safe home. By adopting a stray dog, you’re not only saving a life but also giving them the love and care they deserve. Adoption is a powerful way to reduce the homeless dog population and provide these animals with the opportunity for a better future."`}</p>
          </motion.div>
          <motion.div className="hidden md:flex flex-col w-1/2 justify-between" initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="flex flex-col gap-10">
                <p className="text-xl text-white g">
                  Over 30 Million Stray Dogs <br /> Roam the Streets of India
                </p>
                <p className="text-xl text-white ">
                  Give them a <br /> Loving Home
                </p>
              </div>
              <div className="mt-10">
                <p className="text-white text-justify">{`"In India, millions of stray dogs struggle to survive on the streets, often facing hunger, illness, and the dangers of traffic. Despite their tough lives, many of these resilient dogs are incredibly loving and loyal, waiting for a chance to find a safe home. By adopting a stray dog, you’re not only saving a life but also giving them the love and care they deserve. Adoption is a powerful way to reduce the homeless dog population and provide these animals with the opportunity for a better future."`}</p>
              </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FactBanner;
