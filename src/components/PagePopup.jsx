import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";

export default function PagePopup({ src, width, height, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => Math.min(Math.max(z + delta, 0.5), 5));
  };

  // Render modal into <body> so it floats above everything
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-[9999]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="relative bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col"
        style={{
          width: "90vw",
          height: "90vh",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Header with close button */}
        <div className="flex justify-end p-2 border-b border-gray-300 bg-gray-200">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Content area */}
        <div
          className="flex-1 flex items-center justify-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
        >
          {/* This wrapper div handles the sizing and transforms */}
          <div
            style={{
              width: width,
              height: height,
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
                offset.y / zoom
              }px)`,
              transformOrigin: "center",
              transition: isDragging ? "none" : "transform 0.2s ease",
              userSelect: "none",
            }}
          >
            <img
              src={src}
              alt="Popup Page"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}