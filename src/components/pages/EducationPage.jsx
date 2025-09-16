import { motion } from 'framer-motion';
import './EducationPage.css';

const EducationPage = () => {
  return (
    <div className="education-page">
      <div className="page-header">
        <h2>Education</h2>
        <div className="header-line"></div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2020 - 2024</div>
          <div className="timeline-content">
            <h3>Bachelor of Architecture</h3>
            <h4>University Name</h4>
            <p>Comprehensive study of architectural design, urban planning, structural engineering.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;