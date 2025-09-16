import { motion } from 'framer-motion';
import './CoverPage.css';

const CoverPage = () => {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <motion.div 
          className="cover-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Carmen Sierra Sancho</h1>
          <motion.div 
            className="title-divider"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
          ></motion.div>
          <h2>Architecture Portfolio</h2>
          <p>Final Year Architecture Student</p>
        </motion.div>
        
        <motion.div 
          className="cover-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="image-placeholder">
            <motion.i 
              className="fas fa-building"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.i>
          </div>
          <div className="image-glow"></div>
        </motion.div>
        
        <motion.div 
          className="cover-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p>2024</p>
          <div className="scroll-indicator">
            <motion.div
              className="scroll-dot"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <span>Explore my work</span>
          </div>
        </motion.div>
      </div>
      <div className="cover-pattern"></div>
    </div>
  );
};

export default CoverPage;