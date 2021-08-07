import React from "react";
import Loader from "react-loader-spinner";

import { LoaderSpinnerContainer } from "./LoaderSpinner.styled";

import { colors } from "../../../../styles/colorPalette";

interface LoaderSpinnerProps {
  bgColor?: string;
}

const LoaderSpinner = ({ bgColor }: LoaderSpinnerProps): React.ReactElement => {
  return (
    <LoaderSpinnerContainer>
      <Loader type="ThreeDots" color={bgColor || colors.primary} height={25} width={100} />
    </LoaderSpinnerContainer>
  );
};

export default LoaderSpinner;
