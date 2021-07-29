import React from "react";

import { BoxShadowBox } from "./BoxShadowWrapper.styled";

type BoxShadowProps = {
  children: React.ReactNode;
};

const BoxShadowWrapper = ({ children }: BoxShadowProps): React.ReactElement => {
  return <BoxShadowBox>{children}</BoxShadowBox>;
};

export default BoxShadowWrapper;
