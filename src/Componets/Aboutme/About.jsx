import "./about.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaHtml5, FaGraduationCap, FaTrophy } from "react-icons/fa";

const Variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const data = {
    skills: {
      text: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Git & GitHub",
      icon: <FaHtml5 />,
    },
    education: {
      text: "Bachelor's in Computer Science from KIPM College Of Engineering and Technology, Uttar Pradesh.",
      icon: <FaGraduationCap />,
    },
    achievements: {
      text: "Web Development Intern at Predulive EduTech; optimized website load time by 40%. Participated in Hackathons and Coding Competitions. Built 6+ real-world full-stack projects.",
      icon: <FaTrophy />,
    },
  };

  const handleInformation = (infoType) => {
    setActiveTab(infoType);
  };

  return (
    <motion.div
      className="about"
      variants={Variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="text">
        <h1>About Me</h1>
      </div>
      <div className="wrapper">
        <div className="column-container">
          {/* Left Column */}
          <motion.div className="textContainer" variants={Variants}>
            <div className="box">
              <div className="heading">
                <h1>Introduction</h1>
              </div>
              <motion.h2 whileHover={{ color: "rebeccapurple" }}>
                Full Stack Developer &amp; Internship Experience at Predulive EduTech Foundation.
              </motion.h2>
              <motion.p>
                As a Full Stack Developer Intern at Predulive Edutech Foundation, I optimized
                website load time by over 40% and developed responsive, user-friendly pages.
                Collaborating on projects like "Leaders Boli," I enhanced cross-browser compatibility
                and UI/UX. Skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
              </motion.p>
              <div className="buttons">
                <button
                  className={activeTab === "skills" ? "selected" : ""}
                  onClick={() => handleInformation("skills")}
                >
                  Skills
                </button>
                <button
                  className={activeTab === "education" ? "selected" : ""}
                  onClick={() => handleInformation("education")}
                >
                  Education
                </button>
                <button
                  className={activeTab === "achievements" ? "selected" : ""}
                  onClick={() => handleInformation("achievements")}
                >
                  Achievements
                </button>
              </div>
              <div className="content">
                {data[activeTab].icon && <span className="icon">{data[activeTab].icon}</span>}
                <p>{data[activeTab].text}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="skillContainer" variants={Variants}>
            <h2>Tech Stack</h2>
            <div className="skill">
              <div className="iconImage">
                <img src="/html.png" alt="HTML" />
                <div className="skill-info">
                  <p className="description">HTML</p>
                  <div className="bar"><span style={{ width: "95%" }}></span></div>
                </div>
              </div>
              <div className="iconImage">
                <img src="/css.png" alt="CSS" />
                <div className="skill-info">
                  <p className="description">CSS / SCSS</p>
                  <div className="bar"><span style={{ width: "90%" }}></span></div>
                </div>
              </div>
              <div className="iconImage">
                <img src="/react.png" alt="React" />
                <div className="skill-info">
                  <p className="description">React.js</p>
                  <div className="bar"><span style={{ width: "85%" }}></span></div>
                </div>
              </div>
              <div className="iconImage">
                <img src="/node.png" alt="Node.js" />
                <div className="skill-info">
                  <p className="description">Node.js / Express</p>
                  <div className="bar"><span style={{ width: "80%" }}></span></div>
                </div>
              </div>
              <div className="iconImage">
                <img src="/mongodb.png" alt="MongoDB" />
                <div className="skill-info">
                  <p className="description">MongoDB</p>
                  <div className="bar"><span style={{ width: "78%" }}></span></div>
                </div>
              </div>
              <div className="iconImage">
                <img src="/figma.png" alt="Figma" />
                <div className="skill-info">
                  <p className="description">Figma / Design</p>
                  <div className="bar"><span style={{ width: "70%" }}></span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
