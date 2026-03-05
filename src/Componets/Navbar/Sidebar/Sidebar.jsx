import Links from './links/Links'
import Toggle from './toggle-buttons/Toggle';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.scss';

const variants = {
    open: {
        clipPath: "circle(1200px at 45px 40px)",
        pointerEvents: "auto",
        transition: {
            type: 'spring',
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(20px at 45px 40px)",
        pointerEvents: "none",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
            <motion.div className="bg" variants={variants}>
                <div className="sidebar-header">
                    <span className="sidebar-name">Chandan Pandey</span>
                    <span className="sidebar-tagline">Full Stack Developer</span>
                </div>
                <Links setOpen={setOpen} />
                <div className="sidebar-footer">
                    © 2025 Chandan Pandey
                </div>
            </motion.div>
            <Toggle setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
