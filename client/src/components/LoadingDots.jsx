import React from "react";

const LoadingDots = () => {
  return (
    <div className="flex items-center justify-center space-x-2 h-20">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="w-3 h-3 bg-black rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
