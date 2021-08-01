import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = (): React.ReactElement => {
  return <Loader type="ThreeDots" color="#fff" height={100} width={100} />;
};

export default LoaderSpinner;
