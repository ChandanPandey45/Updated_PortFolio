import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef()
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // Check if device is mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 738;

  const isInView = useInView(ref, { margin: "-100px" })

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm('service_tqapi5g', 'template_mrri1br', formRef.current, {
        publicKey: 'SUN45dGex8FyFezXK',
      })
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
          formRef.current.reset()
        },
        () => {
          setError(true)
          setLoading(false)
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>info.contactchandan@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 - 7651856853</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Location</h2>
          <span>Uttar Pradesh, India</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/chandan-pandey-043771251" target="_blank" rel="noreferrer">
            <span>linkedin.com/in/chandan-pandey</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="formContainer">
        <motion.div className="phoneImage" initial={{ opacity: 1 }} animate={isInView && { opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
          <svg width="450px" height="400px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
              stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.3 }}
              d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
              stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311Z"
              stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.form ref={formRef} onSubmit={sendEmail} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: isMobile ? 0 : 2, duration: 1 }}>
          <input type="text" required placeholder="Your Name" name="name" />
          <input type="email" required placeholder="Your Email" name="email" />
          <textarea rows={7} placeholder="Your Message" name="message" />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {error && (
            <div className="alert alert-error">
              ❌ Something went wrong. Please try again.
            </div>
          )}
          {success && (
            <div className="alert alert-success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
