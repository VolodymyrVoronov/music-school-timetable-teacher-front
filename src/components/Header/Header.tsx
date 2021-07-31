import React from "react";
import ReactDOM from "react-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Button from "../common/UI/Button/Button";

import { HeaderContainer, HeaderUserTitle, HeaderButtonContainer } from "./Header.styled";

const Header = (): React.ReactElement => {
  const portalContainer = document.getElementById("header-root") as HTMLElement;

  return ReactDOM.createPortal(
    <HeaderContainer>
      <Slide top>
        <HeaderUserTitle>User name</HeaderUserTitle>
        <HeaderButtonContainer>
          <Button text="Выход" primary={false} pt="8px" pb="8px" />
        </HeaderButtonContainer>
      </Slide>
    </HeaderContainer>,
    portalContainer
  );
};

export default Header;
