import { motion } from 'framer-motion';

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = ({ setOpen }) => {
    const items = [
        { label: "Home", id: "Homepage" },
        { label: "Experience", id: "Experience" },
        { label: "My Projects", id: "MyProjects" },
        { label: "About Me", id: "About" },
        { label: "Contact", id: "Contact" },
    ];

    return (
        <motion.div className="links" variants={variants}>
            {items.map(item => (
                <motion.a
                    href={`#${item.id}`}
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen && setOpen(false)}
                >
                    {item.label}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;
