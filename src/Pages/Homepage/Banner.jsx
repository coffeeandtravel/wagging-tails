import './Banner.css'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Banner = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  return (
    <motion.div className=" md:block mt-5" ref={ref} style={{opacity, scale}}>
      <div className=" flex items-center justify-center">
        <div className="banner h-[550px] w-[94%] md:h-[600px] md:w-[906px] relative rounded-3xl flex justify-center items-center">
                <motion.h1 className='text-5xl md:text-8xl banner-heading text-amber-500 text-center' initial={{y:50, opacity:0}} animate={{y:5, opacity:1}} transition={{duration:0.8, ease:"easeOut"}} >Stop Buying! <br />Start Adopting.</motion.h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Banner
