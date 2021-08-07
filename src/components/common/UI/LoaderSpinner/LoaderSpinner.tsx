import React from "react";
import Loader from "react-loader-spinner";

import { LoaderSpinnerContainer } from "./LoaderSpinner.styled";

import { colors } from "../../../../styles/colorPalette";

const LoaderSpinner = (): React.ReactElement => {
  return (
    <LoaderSpinnerContainer>
      <Loader type="ThreeDots" color={colors.primary} height={25} width={100} />
    </LoaderSpinnerContainer>
  );
};

export default LoaderSpinner;
