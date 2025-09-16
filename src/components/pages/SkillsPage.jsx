import { motion } from 'framer-motion';
import './SkillsPage.css';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <div className="page-header">
        <h2>Skills & Software</h2>
        <div className="header-line"></div>
      </div>
      <div className="skills-content">
        <div className="skill-category">
          <h3>Design Software</h3>
          <div className="skill-list">
            <div className="skill-item">
              <span>AutoCAD</span>
              <div className="skill-bar"><div className="progress" style={{width: '90%'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;