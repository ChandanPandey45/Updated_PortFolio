import { animate, mirrorEasing, motion } from 'framer-motion'
import './hero.scss'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  }
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};
const hero = () => {
  return (
    <>
      <div className='hero'>
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            < motion.h2 variants={textVariants}> CHANDAN PANDEY</motion.h2>
            < motion.h1 variants={textVariants}> Full Stack Developer & FreeLencer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <a href="https://drive.google.com/file/d/1dE4XMPekQrszK7x-iol9Qd2b36d5CAY_/view?usp=sharing"><motion.button variants={textVariants} whileHover={{ background: "white", color: "black" }}>Download Resume</motion.button> </a>
              <a href="https://www.linkedin.com/in/chandan-pandey-043771251">< motion.button variants={textVariants} whileHover={{ background: "white", color: "black" }}> Let's Chat</motion.button></a>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" className='scrollImage' />
          </motion.div>
          <div className='imageContainer' >
            <img src="/hero.png" alt="" />
          </div>
        </div>
        <motion.div className="slidingTextcontainer" variants={sliderVariants} initial="initial" animate="animate">
          Web Developer  Software Developer FullStack Developer
        </motion.div>
      </div>
    </>
  )

}

export default hero