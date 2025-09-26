import { useEffect, useState } from "react";
import "./ProgressBar.css"; // asegúrate de que el path sea correcto

export default function Progress({ value = 0 }) {
  const progress = value * 100;

  return (
    <div className="progress-wrap" style={{ width: "90%", maxWidth: "640px" }}>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow={progress}
        tabIndex={0}
      >
        <div
          className={`progress-fill nudge`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
