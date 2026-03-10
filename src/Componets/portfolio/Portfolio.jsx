import './portfolio.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        title: "Real Estate App",
        category: "Full Stack",
        img: '/Real State.jpg',
        desc: "Full-stack room rental platform with Google Maps, JWT auth, role-based access, distance filtering, and an owner dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Maps API"],
        demo: "https://github.com/ChandanPandey45/",
        github: "https://github.com/ChandanPandey45/",
        featured: true,
    },
    {
        id: 2,
        title: "Chat App",
        category: "Full Stack",
        img: '/ChatApp.png',
        desc: "Real-time chat app with instant messaging, group chats, media sharing, secure auth, and cross-device compatibility.",
        tech: ["React", "Socket.IO", "Node.js", "MongoDB"],
        demo: "https://github.com/ChandanPandey45/",
        github: "https://github.com/ChandanPandey45/",
        featured: true,
    },
    {
        id: 3,
        title: "Imagistics",
        category: "Frontend",
        img: '/Imagistics.png',
        desc: "AI-powered image generation platform converting text prompts to images. Token-based usage system with a clean React UI.",
        tech: ["React", "AI/API", "JavaScript"],
        demo: "https://github.com/ChandanPandey45/",
        github: "https://github.com/ChandanPandey45/",
    },
    {
        id: 4,
        title: "Password Mania",
        category: "Frontend",
        img: '/Password Menia.png',
        desc: "Secure password manager to store, generate, and manage credentials. Strong encryption with a clean, intuitive UI.",
        tech: ["React", "LocalStorage", "JavaScript"],
        demo: "https://github.com/ChandanPandey45/",
        github: "https://github.com/ChandanPandey45/",
    },
    {
        id: 5,
        title: "Weather App",
        category: "Frontend",
        img: '/Weather.jpg',
        desc: "Responsive weather forecast app with live API integration. Search any city for real-time temperature, wind, and humidity.",
        tech: ["HTML", "CSS", "JavaScript", "Weather API"],
        demo: "https://github.com/ChandanPandey45/",
        github: "https://github.com/ChandanPandey45/",
    },
    {
        id: 6,
        title: "Netflix Clone",
        category: "Frontend",
        img: '/Netflix.webp',
        desc: "Pixel-perfect Netflix UI clone with responsive layout, movie cards, hover effects, and smooth transitions.",
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "https://github.com/ChandanPandey45/",
        github: "https://github.com/ChandanPandey45/",
    },
]

const categories = ["All", "Full Stack", "Frontend"]

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: (i) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" }
    }),
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
}

const Portfolio = () => {
    const [active, setActive] = useState("All")

    // Check if device is mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 738;

    const filtered = active === "All" ? projects : projects.filter(p => p.category === active)

    // Dynamic variants to remove animation lag on mobile
    const dynamicCardVariants = {
        hidden: { opacity: 0, y: isMobile ? 0 : 30, scale: isMobile ? 1 : 0.97 },
        visible: (i) => ({
            opacity: 1, y: 0, scale: 1,
            transition: {
                duration: isMobile ? 0.2 : 0.45,
                delay: isMobile ? 0 : i * 0.07,
                ease: "easeOut"
            }
        }),
        exit: { opacity: 0, scale: isMobile ? 1 : 0.95, transition: { duration: 0.2 } }
    }

    return (
        <div className='portfolio-v2'>
            {/* Header */}
            <motion.div
                className="portfolio-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1>My <span>Projects</span></h1>
                <p>A selection of real-world apps I've designed, built, and shipped.</p>
            </motion.div>

            {/* Filter Pills */}
            <div className="filter-row">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-pill ${active === cat ? 'active' : ''}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="projects-grid">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, i) => (
                        <motion.div
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            key={project.id}
                            variants={dynamicCardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            custom={i}
                            layout
                        >
                            {/* Image */}
                            <div className="card-image">
                                <img src={project.img} alt={project.title} />
                                <div className="image-overlay">
                                    <div className="overlay-links">
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-btn">
                                            <FiExternalLink /> Live Demo
                                        </a>
                                        <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn outline">
                                            <FiGithub /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="category-tag">{project.category}</span>
                                    {project.featured && <span className="featured-badge">⭐ Featured</span>}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="tech-stack">
                                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                </div>
                                <div className="card-actions">
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="action-btn primary">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="action-btn ghost">
                                        <FiGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Footer link */}
            <motion.div
                className="portfolio-footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <a href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer">
                    View all projects on GitHub →
                </a>
            </motion.div>
        </div>
    )
}

export default Portfolio
