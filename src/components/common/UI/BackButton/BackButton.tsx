import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
//@ts-ignore
import Fade from "react-reveal/Fade";

import { IoIosArrowDropleft } from "react-icons/io";

import { BackButtonContainer } from "./BackButton.styled";

interface BackButtonProps {
  path: string;
}

const BackButton = ({ path }: BackButtonProps): React.ReactElement => {
  const portalContainer = document.getElementById("back-button-root") as HTMLElement;

  return ReactDOM.createPortal(
    <BackButtonContainer>
      <Link to={path} className="back-button">
        <Fade duration={1500}>
          <IoIosArrowDropleft />
        </Fade>
      </Link>
    </BackButtonContainer>,
    portalContainer
  );
};

export default BackButton;
