import './Banner.css'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ListAdoption = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  return (
    <motion.div className="mt-3" ref={ref} style={{opacity, scale}}>
      <div className="flex items-center justify-center mb-5">
        <div className="listAdoption h-[589px] w-[94%] md:h-[600px] md:w-[906px] rounded-3xl ">
            <a href="" className="h-full w-full flex justify-center items-center">
                <h2 className="banner-heading text-5xl md:text-8xl text-lime-400" >List an Adoption!</h2>
            </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ListAdoption
