import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="contact-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>carmen.sierra@email.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+34 XXX XXX XXX</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Spain</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;