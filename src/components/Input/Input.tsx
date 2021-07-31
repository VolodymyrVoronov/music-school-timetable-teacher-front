import React from "react";

import { InputContainer, InputLabel, InputField } from "./Input.styled";

type InputProps = {
  labelText: string;
  inputType: string;
  inputName: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ labelText, inputType, inputName, value, onChange }: InputProps): React.ReactElement => {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <InputField type={inputType} name={inputName} onChange={onChange} value={value} />
    </InputContainer>
  );
};

export default Input;
