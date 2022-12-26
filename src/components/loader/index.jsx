import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => {
  return (
    <div className="loader w-full fixed top-0 left-0 z-[1301] ">
      <LinearProgress color="primary" size="md" />
    </div>
  );
};

export default Loader;
