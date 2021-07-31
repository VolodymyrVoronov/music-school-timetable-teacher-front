import React from "react";

import { ButtonContainer } from "./Button.styled";

type ButtonProps = {
  text: string;
  primary: boolean;
  onClick?: () => void;
  mt?: string;
  mb?: string;
  disabled?: boolean;
};

const Button = ({ text, primary, onClick, disabled, mt = "0px", mb = "0px" }: ButtonProps): React.ReactElement => {
  return (
    <ButtonContainer type="button" onClick={onClick} disabled={disabled} isPrimary={primary} mt={mt} mb={mb}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
