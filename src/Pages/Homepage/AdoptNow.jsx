// import React from 'react'
import './Banner.css'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const AdoptNow = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  return (
    <motion.div className="mt-7"ref={ref} style={{opacity, scale}}> 
      <div className="flex items-center justify-center">
        <div className="adopt h-[580px] w-[94%] md:h-[600px] md:w-[906px] rounded-3xl">
            <a href="#" className='w-full h-full flex items-center justify-center '> 
                <h2 className='banner-heading text-amber-500 text-5xl md:text-8xl'>Adopt Now!</h2>
            </a>
        </div>
      </div>
    </motion.div>
  )
}

export default AdoptNow
