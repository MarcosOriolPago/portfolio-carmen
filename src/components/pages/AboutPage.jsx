import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutPage.css';

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="about-page"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="page-header" variants={itemVariants}>
        <h2>About Me</h2>
        <div className="header-line"></div>
      </motion.div>
      
      <div className="about-layout">
        <motion.div className="about-image" variants={itemVariants}>
          <div className="profile-container">
            <div className="profile-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <div className="profile-glow"></div>
          </div>
        </motion.div>
        
        <motion.div className="about-text" variants={itemVariants}>
          <p className="intro">
            Passionate architecture student in my final year, dedicated to creating 
            innovative and sustainable design solutions that harmonize functionality 
            with aesthetic excellence.
          </p>
          
          <div className="about-details">
            <motion.div className="detail-item" variants={itemVariants}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Spain</span>
            </motion.div>
            <motion.div className="detail-item" variants={itemVariants}>
              <i className="fas fa-birthday-cake"></i>
              <span>22 years old</span>
            </motion.div>
            <motion.div className="detail-item" variants={itemVariants}>
              <i className="fas fa-graduation-cap"></i>
              <span>Final Year Architecture Student</span>
            </motion.div>
          </div>
          
          <motion.div className="philosophy" variants={itemVariants}>
            <h3>Design Philosophy</h3>
            <blockquote>
              "Architecture is not just about creating spaces, but about crafting 
              experiences that inspire, comfort, and elevate the human spirit."
            </blockquote>
          </motion.div>
          
          <motion.div className="interests" variants={itemVariants}>
            <h3>Interests</h3>
            <div className="interest-tags">
              <span className="tag">Sustainable Design</span>
              <span className="tag">Urban Planning</span>
              <span className="tag">Digital Fabrication</span>
              <span className="tag">Parametric Design</span>
              <span className="tag">Historical Preservation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;