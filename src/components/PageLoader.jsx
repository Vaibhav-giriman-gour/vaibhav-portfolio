// src/components/PageLoader.jsx
import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-[#afb0b6]">
      <p className="text-lg animate-pulse">Loading Portfolio...</p>
    </div>
  );
};

export default PageLoader;