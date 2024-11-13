import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="text-6xl text-center font-bold text-purple-600">404</h1>
      <h1 className="text-6xl text-center font-bold text-purple-600">
        Data Not found
      </h1>
      <button onClick={handleBack} className="btn btn-secondary">
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
