import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ isLoading, override, size }) => {
  return (
    <ClipLoader
      loading={isLoading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
