import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <style jsx>{`
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 10px solid #f3f3f3; /* Light grey */
          border-top: 10px solid #800080;
          border-radius: 50%;
          animation: spinner 1.5s linear infinite;
        }

        /* Add any additional styles as needed */
        .spinner-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh; /* Adjust as needed */
        }
      `}</style>
      <div className="loading-spinner"></div>
    </div>
  );
}
