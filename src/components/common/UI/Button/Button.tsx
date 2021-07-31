import React from "react";

import { ButtonContainer } from "./Button.styled";

type ButtonProps = {
  text: string;
  primary: boolean;
  onClick?: () => void;
  mt?: string;
  mb?: string;
  pt?: string;
  pb?: string;
  disabled?: boolean;
};

const Button = ({ text, primary, onClick, disabled, mt = "0px", mb = "0px", pt, pb }: ButtonProps): React.ReactElement => {
  return (
    <ButtonContainer type="button" onClick={onClick} disabled={disabled} isPrimary={primary} mt={mt} mb={mb} pt={pt} pb={pb}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
