import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

export default function PdfFlipBook({ file, pageScale = 1.5 }) {
  const bookRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [pageSize, setPageSize] = useState({ width: 600, height: 800 });

  // Create mock pages for demonstration
  useEffect(() => {
    const createMockPages = () => {
      const mockPages = [];
      
      // Create 8 sample pages
      for (let i = 1; i <= 8; i++) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 800;
        
        // Create a mock page with page number
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#333333';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Page ${i}`, canvas.width / 2, canvas.height / 2);
        
        // Add some content
        ctx.font = '16px Arial';
        ctx.fillText(`This is the content of page ${i}`, canvas.width / 2, canvas.height / 2 + 60);
        
        // Add border
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
        
        mockPages.push(canvas.toDataURL('image/png'));
      }
      
      setPages(mockPages);
      setLoading(false);
    };

    createMockPages();
  }, []);

  // Load PDF - commented out for demo, uncomment and modify for real use
  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    async function loadPdf(srcFile) {
      setLoading(true);
      setPages([]);

      let loadingTask;
      if (typeof srcFile === 'string') {
        loadingTask = pdfjsLib.getDocument(srcFile);
      } else if (srcFile instanceof File) {
        const arrayBuffer = await srcFile.arrayBuffer();
        loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      } else {
        loadingTask = pdfjsLib.getDocument(srcFile);
      }

      const pdf = await loadingTask.promise;
      const rendered = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: pageScale });

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);

        await page.render({ canvasContext: ctx, viewport }).promise;
        rendered.push(canvas.toDataURL('image/png'));

        if (i === 1) setPageSize({ width: canvas.width, height: canvas.height });
        if (cancelled) break;
      }

      if (!cancelled) {
        setPages(rendered);
        setLoading(false);
      }
    }

    loadPdf(file).catch(err => console.error(err));

    return () => { cancelled = true; };
  }, [file, pageScale]);
  

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!bookRef.current) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        bookRef.current.pageFlip().flipNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        bookRef.current.pageFlip().flipPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6">
        
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-600 text-lg">Loading PDF...</span>
          </div>
        ) : (
          <div 
            className="book-container"
          >
            <HTMLFlipBook
              ref={bookRef}
              width={pageSize.width}      // Single page width
              height={pageSize.height}    // Single page height
              size="fixed"                // Fixed size mode
              minWidth={300}              // Minimum width for responsiveness
              maxWidth={1000}             // Maximum width
              minHeight={400}             // Minimum height
              maxHeight={1200}            // Maximum height
              drawShadow={true}           // Enable shadows
              flippingTime={1000}         // Animation duration
              usePortrait={false}         // Landscape orientation for spread
              startZIndex={0}             // Z-index for pages
              autoSize={true}             // Auto-size pages
              maxShadowOpacity={0.5}      // Shadow opacity
              showCover={true}            // Show cover page
              mobileScrollSupport={false} // Disable for better control
              swipeDistance={30}          // Swipe distance
              clickEventForward={true}    // Forward click events
              useMouseEvents={true}       // Enable mouse events
              disableFlipByClick={false}  // Allow click to flip
              style={{}}
              startPage={0}               // Start from first page
              className="shadow-2xl"
            >
              {pages.map((src, idx) => (
                <div
                  key={idx}
                  className="page bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #f9f9f9 25%, transparent 25%), linear-gradient(-45deg, #f9f9f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f9f9f9 75%), linear-gradient(-45deg, transparent 75%, #f9f9f9 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={src}
                      alt={`Page ${idx + 1}`}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                    {/* Page number */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
                      {idx + 1}
                    </div>
                  </div>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        )}
      </div>
    </div>
  );
}
