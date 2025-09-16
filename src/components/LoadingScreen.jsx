import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-book"
          animate={{
            rotateY: [0, 15, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="book-spine"></div>
          <motion.div 
            className="book-pages"
            animate={{
              scaleX: [1, 0.9, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Carmen Sierra Sancho</h2>
          <p>Loading Portfolio...</p>
        </motion.div>
        
        <motion.div 
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;