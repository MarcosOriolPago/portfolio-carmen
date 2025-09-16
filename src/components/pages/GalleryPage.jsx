import { motion } from 'framer-motion';
import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <div className="page-header">
        <h2>Project Gallery</h2>
        <div className="header-line"></div>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <div className="image-placeholder">
            <i className="fas fa-image"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;