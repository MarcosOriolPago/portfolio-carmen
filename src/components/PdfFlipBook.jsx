import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";
import ProgressBar from "./ProgressBar";


export default function PdfFlipBook({ file, pageScale = 1.5 }) {
  const bookRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [pageSize, setPageSize] = useState({ width: 600, height: 800 });
  const [progress, setProgress] = useState(0);

  // Popup state
  const [popup, setPopup] = useState(null); // { idx, src, rect }
  const [popupZoom, setPopupZoom] = useState(1);
  const [popupOffset, setPopupOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Load PDF
  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    async function loadPdf(srcFile) {
      setLoading(true);
      setPages([]);

      let loadingTask;
      if (typeof srcFile === "string") {
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
        const hiResViewport = page.getViewport({ scale: pageScale * 4 });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = Math.floor(hiResViewport.width);
        canvas.height = Math.floor(hiResViewport.height);

        await page.render({ canvasContext: ctx, viewport: hiResViewport }).promise;

        rendered.push({
          src: canvas.toDataURL("image/png"),
          width: Math.floor(viewport.width),
          height: Math.floor(viewport.height),
        });

        if (i === 1) {
          setPageSize({
            width: Math.floor(viewport.width),
            height: Math.floor(viewport.height),
          });
        }

        if (cancelled) break;
      }

      if (!cancelled) {
        setPages(rendered);
        setLoading(false);
      }
    }

    loadPdf(file).catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
  }, [file, pageScale]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!bookRef.current || popup) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        bookRef.current.pageFlip().flipNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        bookRef.current.pageFlip().flipPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [popup]);


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-8 relative">
      {loading ? (
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 text-lg">Loading PDF...</span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 relative">
          <HTMLFlipBook
            ref={bookRef}
            width={pageSize.width}
            height={pageSize.height}
            size="fixed"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1200}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            swipeDistance={30}
            clickEventForward={true}
            useMouseEvents={!popup}
            disableFlipByClick={!!popup}
            className="shadow-2xl"
            onFlip={(e) => setProgress((e.data + 1) / pages.length)}
          >
            {pages.map((p, idx) => (
              <div
                key={idx}
                className="page bg-white border border-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
                onDoubleClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setPopup({ idx, src: p.src, rect, width: p.width, height: p.height });
                  setPopupZoom(1);
                  setPopupOffset({ x: 0, y: 0 });
                }}
              >
                <img
                  src={p.src}
                  alt={`Page ${idx + 1}`}
                  style={{ width: p.width, height: p.height, objectFit: "contain" }}
                  draggable={false}
                />
              </div>
            ))}
          </HTMLFlipBook>
          <ProgressBar value={progress} />
        </div>
      )}
      
    </div>
  );
}
