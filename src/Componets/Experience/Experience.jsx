import { motion } from "framer-motion";
import "./experience.scss";

const experiences = [
    {
        id: 1,
        company: "Tranzita Systems",
        role: "Software Development Engineer - 1",
        location: "Lucknow, U.P.",
        period: "2025 – Present",
        type: "Full Time",
        color: "#6c63ff",
        highlights: [
            "Built scalable REST APIs for Centum Academy, reducing data latency by 25%.",
            "Created real-time dashboards with Express.js and Socket.IO, cutting debugging time by 30%.",
            "Implemented secure JWT authentication for 1,000+ users.",
            "Designed modular backend architecture with reusable middleware.",
        ],
    },
    {
        id: 2,
        company: "Predulive Edutech Foundation",
        role: "Software Developer Intern",
        location: "Lucknow, U.P.",
        period: "2024 – 25",
        type: "Internship",
        color: "#a78bfa",
        highlights: [
            "Developed a React admin panel managing 10,000+ users with 40% efficiency gain.",
            "Improved site performance by 40% via lazy loading and code splitting.",
            "Enhanced cross-browser compatibility and UI/UX across multiple pages.",
            "Collaborated on 'Leaders Boli' project, sharpening skills in React and modern CSS.",
        ],
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 60 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2 },
    }),
};

const Experience = () => {
    return (
        <div className="experience">
            <motion.div
                className="heading"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1>Professional Experience</h1>
                <p className="subtitle">Where I've worked and what I've built</p>
            </motion.div>

            <div className="timeline">
                {experiences.map((exp, i) => (
                    <motion.div
                        className="timeline-item"
                        key={exp.id}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={i}
                        viewport={{ once: true }}
                    >
                        {/* Timeline dot & line */}
                        <div className="timeline-marker">
                            <div className="dot" style={{ background: exp.color, boxShadow: `0 0 14px ${exp.color}88` }} />
                            {i < experiences.length - 1 && <div className="line" />}
                        </div>

                        {/* Card */}
                        <motion.div
                            className="card"
                            whileHover={{ translateY: -6, boxShadow: `0 20px 60px ${exp.color}22` }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <div className="card-header">
                                <div className="left">
                                    <span className="type-badge" style={{ color: exp.color, borderColor: `${exp.color}44`, background: `${exp.color}11` }}>
                                        {exp.type}
                                    </span>
                                    <h2 className="company">{exp.company}</h2>
                                    <h3 className="role">{exp.role}</h3>
                                </div>
                                <div className="right">
                                    <span className="period">{exp.period}</span>
                                    <span className="location">📍 {exp.location}</span>
                                </div>
                            </div>
                            <ul className="highlights">
                                {exp.highlights.map((h, idx) => (
                                    <li key={idx}>
                                        <span className="bullet" style={{ background: exp.color }} />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
