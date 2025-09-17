import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero" ref={ref}>
      <motion.div 
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Carmen Sierra Sancho
        </motion.h1>
        
        <motion.div 
          className="hero-subtitle"
          variants={itemVariants}
        >
          <span className="subtitle-line">Architecture Student</span>
          <span className="subtitle-line">Final Year</span>
        </motion.div>
        
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          Passionate about creating innovative and sustainable architectural solutions 
          that harmonize functionality with aesthetic excellence. Dedicated to designing 
          spaces that inspire and elevate the human experience.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          variants={itemVariants}
        >
          <motion.button 
            className="cta-button primary"
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Portfolio</span>
            <i className="fas fa-arrow-down"></i>
          </motion.button>
          
          <motion.a 
            href="#cv" 
            className="cta-button secondary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#cv');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download CV</span>
            <i className="fas fa-download"></i>
          </motion.a>
        </motion.div>
      </motion.div>
    
      
      {/* Background geometric pattern */}
      <div className="hero-background">
        <motion.div 
          className="geometric-shape shape-1"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="geometric-shape shape-2"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="geometric-shape shape-3"
          animate={{ 
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;