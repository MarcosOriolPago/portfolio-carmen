import { motion } from 'framer-motion';
import './ExperiencePage.css';

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <div className="page-header">
        <h2>Experience</h2>
        <div className="header-line"></div>
      </div>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Architecture Intern</h3>
          <h4>Summer 2023</h4>
          <p>Assisted in residential and commercial project development.</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;