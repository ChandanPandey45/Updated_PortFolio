import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './hero.scss'

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Freelancer",
  "UI/UX Enthusiast",
]

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
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='hero'>
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}> CHANDAN PANDEY</motion.h2>
            <motion.h1 variants={textVariants}>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="role-text"
              >
                {roles[roleIndex]}
              </motion.span>
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <a href="https://drive.google.com/file/d/1dE4XMPekQrszK7x-iol9Qd2b36d5CAY_/view?usp=sharing" target="_blank" rel="noreferrer">
                <motion.button variants={textVariants} whileHover={{ background: "white", color: "black" }}>
                  Download Resume
                </motion.button>
              </a>
              <a href="https://www.linkedin.com/in/chandan-pandey-043771251" target="_blank" rel="noreferrer">
                <motion.button variants={textVariants} whileHover={{ background: "white", color: "black" }}>
                  Let's Chat
                </motion.button>
              </a>
              <a href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer">
                <motion.button variants={textVariants} className="github-btn" whileHover={{ background: "white", color: "black" }}>
                  GitHub
                </motion.button>
              </a>
            </motion.div>
            <motion.div variants={textVariants} className="stats">
              <div className="stat">
                <span className="num">2+</span>
                <span className="label">Years Exp.</span>
              </div>
              <div className="divider" />
              <div className="stat">
                <span className="num">6+</span>
                <span className="label">Projects</span>
              </div>
              <div className="divider" />
              <div className="stat">
                <span className="num">1K+</span>
                <span className="label">Users Served</span>
              </div>
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