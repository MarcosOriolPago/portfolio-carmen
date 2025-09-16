import { useEffect } from 'react';

export const useKeyboardNavigation = (currentPage, totalPages, onNextPage, onPrevPage) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Prevent navigation if user is typing in an input
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
          event.preventDefault();
          onNextPage();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onPrevPage();
          break;
        case 'Home':
          event.preventDefault();
          // Go to first page
          if (currentPage > 0) {
            for (let i = currentPage; i > 0; i--) {
              onPrevPage();
            }
          }
          break;
        case 'End':
          event.preventDefault();
          // Go to last page
          if (currentPage < totalPages - 1) {
            for (let i = currentPage; i < totalPages - 1; i++) {
              onNextPage();
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, totalPages, onNextPage, onPrevPage]);
};