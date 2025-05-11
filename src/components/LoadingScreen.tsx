import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-12 h-12 border-4 border-red-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
