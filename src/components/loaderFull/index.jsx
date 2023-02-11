import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderFull = () => {
  return (
    <div className="bg-[rgba(0,0,0,.5)] opacity-80 z-50 min-h-screen flex justify-center items-center fixed top-0 right-0 left-0 bottom-0">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default LoaderFull;
