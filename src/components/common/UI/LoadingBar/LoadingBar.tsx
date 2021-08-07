import React from "react";
import ReactDOM from "react-dom";
import Skeleton from "@yisheng90/react-loading";

import { LoadingBarContainer } from "./LoadingBar.styled";

interface LoadingBarProps {
  color: "#6C63FF" | "white";
}

const LoadingBar = ({ color }: LoadingBarProps): React.ReactElement => {
  const portalContainer = document.getElementById("loading-bar-root") as HTMLElement;

  return ReactDOM.createPortal(
    <LoadingBarContainer>
      <Skeleton color={color} />
    </LoadingBarContainer>,
    portalContainer
  );
};

export default LoadingBar;
