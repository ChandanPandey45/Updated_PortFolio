import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from './Sidebar/Sidebar'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.div className="logo" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          Chandan
        </motion.div>
        <div className="social">
          <a href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chandan-pandey-043771251" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar