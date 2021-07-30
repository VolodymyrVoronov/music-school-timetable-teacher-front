import React from "react";

import { ButtonContainer } from "./Button.styled";

type ButtonProps = {
  text: string;
  primary: boolean;
  onClick?: () => void;
};

const Button = ({ text, primary, onClick }: ButtonProps): React.ReactElement => {
  return (
    <ButtonContainer type="button" onClick={onClick} isPrimary={primary}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
