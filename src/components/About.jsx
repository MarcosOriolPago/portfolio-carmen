import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="about-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="about-header"
            variants={itemVariants}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate architecture student dedicated to creating innovative 
              and sustainable design solutions.
            </p>
          </motion.div>

          <div className="about-layout">
            <motion.div 
              className="about-text"
              variants={itemVariants}
            >
              <div className="intro-text">
                <p>
                  I am currently in my final year of Architecture studies, with a deep passion 
                  for creating spaces that not only serve functional purposes but also inspire 
                  and elevate the human experience. My approach to architecture is rooted in 
                  sustainability, innovation, and respect for both the built and natural environment.
                </p>
                
                <p>
                  Throughout my academic journey, I have developed a strong foundation in design 
                  principles, technical skills, and project management. I believe that architecture 
                  has the power to shape communities, influence behavior, and contribute to a 
                  more sustainable future.
                </p>
              </div>
              
              <motion.div 
                className="philosophy-quote"
                variants={itemVariants}
              >
                <blockquote>
                  "Architecture is not just about creating spaces, but about crafting 
                  experiences that inspire, comfort, and elevate the human spirit."
                </blockquote>
              </motion.div>
            </motion.div>

            <motion.div 
              className="about-details"
              variants={itemVariants}
            >
              <div className="details-grid">
                <div className="detail-card">
                  <div className="detail-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="detail-content">
                    <h3>Education</h3>
                    <p>Final Year Architecture Student</p>
                    <p className="detail-sub">Expected Graduation 2024</p>
                  </div>
                </div>
                
                <div className="detail-card">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="detail-content">
                    <h3>Location</h3>
                    <p>Spain</p>
                    <p className="detail-sub">Available for opportunities</p>
                  </div>
                </div>
                
                <div className="detail-card">
                  <div className="detail-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="detail-content">
                    <h3>Specialization</h3>
                    <p>Sustainable Design</p>
                    <p className="detail-sub">Eco-friendly solutions</p>
                  </div>
                </div>
                
                <div className="detail-card">
                  <div className="detail-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="detail-content">
                    <h3>Recognition</h3>
                    <p>Design Excellence</p>
                    <p className="detail-sub">Academic achievements</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="interests-section"
            variants={itemVariants}
          >
            <h3>Areas of Interest</h3>
            <div className="interests-grid">
              {[
                'Sustainable Architecture',
                'Urban Planning', 
                'Digital Fabrication',
                'Parametric Design',
                'Historical Preservation',
                'Smart Buildings',
                'Biophilic Design',
                'Affordable Housing'
              ].map((interest, index) => (
                <motion.div
                  key={interest}
                  className="interest-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {interest}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;