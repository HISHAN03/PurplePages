import React from "react";

export default function LoadingSpinner() {
  const styles = `
    .pos-center {
      position: fixed;
      top: calc(50% - 40px);
      left: calc(50% - 40px);
    }

    .loader {
      border: 10px solid #f3f3f3;
      border-top: 10px solid #800080;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
     
        <div className="loader m-4"></div>
     
    </>
  );
}
