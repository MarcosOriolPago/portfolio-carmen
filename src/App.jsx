import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import BookContainer from './components/BookContainer';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  const totalPages = 8;

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    if (pageIndex !== currentPage) {
      setDirection(pageIndex > currentPage ? 1 : -1);
      setCurrentPage(pageIndex);
    }
  };

  // Add keyboard navigation
  useKeyboardNavigation(currentPage, totalPages, nextPage, prevPage);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <Navigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPrevPage={prevPage}
        onGoToPage={goToPage}
      />
      <BookContainer
        currentPage={currentPage}
        direction={direction}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
