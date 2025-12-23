import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallax = ({ type }) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  return (
    <div className='parallax' ref={ref}>
      <motion.h1 style={{ y: yText }}>{type === "services" ? "About Me" : "My Projects"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg, backgroundImage: `url(${type === 'services' ? "/planets.png" : "/sun.png"})` }}></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>

    </div>
  )
}

export default Parallax