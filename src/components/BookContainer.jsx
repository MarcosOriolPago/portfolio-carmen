import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './pages/CoverPage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './BookContainer.css';

const BookContainer = ({ currentPage, direction, totalPages }) => {
  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction > 0 ? "left center" : "right center"}),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: "center center"
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction < 0 ? "left center" : "right center"
    })
  };

  const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  const getPageComponent = (pageIndex) => {
    switch (pageIndex) {
      case 0: return <CoverPage />;
      case 1: return <AboutPage />;
      case 2: return <EducationPage />;
      case 3: return <ExperiencePage />;
      case 4: return <ProjectsPage />;
      case 5: return <SkillsPage />;
      case 6: return <GalleryPage />;
      case 7: return <ContactPage />;
      default: return <CoverPage />;
    }
  };

  return (
    <div className="book-container">
      <div className="book-shadow"></div>
      <motion.div 
        className="book"
        initial={{ rotateX: 15, rotateY: -5 }}
        animate={{ rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="book-spine"></div>
        <div className="book-pages">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              className={`page page-${currentPage}`}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
            >
              {getPageComponent(currentPage)}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="book-binding"></div>
      </motion.div>
    </div>
  );
};

export default BookContainer;