import React from "react";
import Loader from "react-loader-spinner";

import { LoaderSpinnerContainer } from "./LoaderSpinner.styled";

import { colors } from "../../../../styles/colorPalette";

interface LoaderSpinnerProps {
  bgColor?: string;
  mt?: string;
}

const LoaderSpinner = ({ bgColor, mt }: LoaderSpinnerProps): React.ReactElement => {
  return (
    <LoaderSpinnerContainer mt={mt}>
      <Loader type="ThreeDots" color={bgColor || colors.primary} height={25} width={100} />
    </LoaderSpinnerContainer>
  );
};

export default LoaderSpinner;
