/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import './portfolio.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Chat App",
        img: '/ChatApp.png',
        desc: "A real-time chat application with instant messaging, group chats, media sharing, and notifications. Features a responsive UI, secure authentication, and cross-device compatibility for seamless communication."
    },
    {
        id: 2,
        title: "Imagistics",
        img: "/Imagistics.png",
        desc: "Developed a real time web platform featuring the power to convert the words into Image using a API by using the Tokens for each time to Use."
    },
    {
        id: 3,
        title: "Weather App",
        img: "/Weather.jpg",
        desc: "Developed a responsive weather forecast app with HTML, CSS, and JavaScript, integrating a weather API for real-time updates. Enabled users to search cities for instant weather details, including temperature, wind speed, and humidity. This project highlights skills in front-end design, API integration, and interactive UI development. "
    },
    {
        id: 4,
        title: "NetFlix Clone",
        img: "/Netflix.webp",
        desc: "Developed a Netflix clone using Html, CSS and JavaScript for the purpose of the learnig."
    },
];
const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        //   offset:["start start" , "end start"]
    }); // optional hai cn be cha

    const y = useTransform(scrollYProgress, [0, 1], [-500, 500])
    return (<section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }} >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href="https://github.com/ChandanPandey45/"> <motion.button whileHover={{ background: "white", color: "black" }}> See Demo</motion.button></a>
                </motion.div>
            </div>
        </div>

    </section>
    );
}
const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"], }); // optional hai cn be changed
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1> My Projects</h1>
                <motion.div style={{ scaleX }} className='progressBar'></motion.div >
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
