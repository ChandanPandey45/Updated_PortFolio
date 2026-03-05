import "./about.scss";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaAward } from "react-icons/fa";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

const skills = [
  { name: "React.js", img: "/react.png", percent: 90 },
  { name: "Node.js / Express", img: "/node.png", percent: 85 },
  { name: "MongoDB", img: "/mongodb.png", percent: 80 },
  { name: "JavaScript", img: "https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png", percent: 88 },
  { name: "HTML5", img: "/html.png", percent: 95 },
  { name: "CSS / SCSS", img: "/css.png", percent: 90 },
  { name: "Figma", img: "/figma.png", percent: 75 },
];

const About = () => {
  return (
    <div className="about-v2">
      {/* Header */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>About <span>Me</span></h1>
        <p>Passionate Full Stack Developer crafting premium web experiences.</p>
      </motion.div>

      <div className="about-grid">
        {/* Left Column: Journey */}
        <motion.div
          className="about-card journey-card"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <div className="card-inner">
            <div className="content-block">
              <h2 className="block-title">
                <FaLaptopCode className="accent-icon" /> Introduction
              </h2>
              <p>
                As a Full Stack Developer Intern at Predulive Edutech Foundation, I optimized
                website load times by over 40% and developed responsive, user-friendly applications.
                Collaborating on projects like "Leaders Boli," I enhanced cross-browser compatibility
                and UI/UX to deliver flawless digital experiences.
              </p>
            </div>

            <div className="content-block">
              <h2 className="block-title">
                <FaGraduationCap className="accent-icon" /> Education
              </h2>
              <p>
                <strong>Bachelor's in Computer Science</strong><br />
                KIPM College Of Engineering and Technology, Uttar Pradesh.
              </p>
            </div>

            <div className="content-block">
              <h2 className="block-title">
                <FaAward className="accent-icon" /> Achievements
              </h2>
              <ul className="achievements-list">
                <li>Built 6+ real-world full-stack web applications.</li>
                <li>Participated in complex Hackathons and Coding Competitions.</li>
                <li>Demonstrated history of boosting web performance and SEO.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Skills */}
        <motion.div
          className="about-card skills-card"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          <div className="card-inner">
            <h2 className="block-title always-margin">My Tech Stack</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon-bg">
                    <img src={skill.img} alt={skill.name} />
                  </div>
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="progress-bg">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
