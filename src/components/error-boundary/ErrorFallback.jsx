import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default ErrorFallback;
