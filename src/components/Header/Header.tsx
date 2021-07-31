import React from "react";
import ReactDOM from "react-dom";

import { HeaderContainer } from "./Header.styled";

const Header = (): React.ReactElement => {
  const portalContainer = document.getElementById("header-root") as HTMLElement;

  return ReactDOM.createPortal(<HeaderContainer>Header</HeaderContainer>, portalContainer);
};

export default Header;
