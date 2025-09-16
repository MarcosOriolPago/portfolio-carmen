import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ currentPage, totalPages, onNextPage, onPrevPage, onGoToPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageNames = [
    'Cover',
    'About',
    'Education',
    'Experience',
    'Projects',
    'Skills',
    'Gallery',
    'Contact'
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Carmen Sierra Sancho
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Architecture Portfolio
        </motion.p>
      </div>
      
      <div className="nav-controls">
        <motion.button 
          className="nav-btn prev"
          onClick={onPrevPage}
          disabled={currentPage === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <i className="fas fa-chevron-left"></i>
        </motion.button>
        
        <motion.span 
          className="page-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {currentPage + 1} / {totalPages}
        </motion.span>
        
        <motion.button 
          className="nav-btn next"
          onClick={onNextPage}
          disabled={currentPage === totalPages - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <i className="fas fa-chevron-right"></i>
        </motion.button>
      </div>
      
      <div className="nav-menu">
        <motion.button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </motion.button>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="menu-dropdown"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {pageNames.map((name, index) => (
                <motion.button
                  key={index}
                  className={`menu-item ${index === currentPage ? 'active' : ''}`}
                  onClick={() => {
                    onGoToPage(index);
                    setIsMenuOpen(false);
                  }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;