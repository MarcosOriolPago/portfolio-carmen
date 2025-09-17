import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Use public URL instead of import
const cvPDF = '/CV.pdf';
import './CVViewer.css';

const CVViewer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Carmen_Sierra_Sancho_CV.pdf';
    link.click();
  };

  const viewCV = () => {
    window.open(cvPDF, '_blank');
  };

  return (
    <div className="cv-viewer" ref={ref}>
      <div className="container">
        <motion.div 
          className="cv-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Curriculum Vitae</h2>
          <p className="section-subtitle">
            Download or view my complete CV with detailed information about my 
            education, experience, and skills.
          </p>
          
          <div className="cv-actions">
            <motion.button 
              className="cv-button primary"
              onClick={downloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download"></i>
              <span>Download CV</span>
            </motion.button>
            
            <motion.button 
              className="cv-button secondary"
              onClick={viewCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-eye"></i>
              <span>View Online</span>
            </motion.button>
          </div>
          
          <div className="cv-preview">
            <div className="cv-placeholder">
              <i className="fas fa-file-pdf"></i>
              <p>CV Preview Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CVViewer;