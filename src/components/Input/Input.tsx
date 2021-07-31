import React from "react";

import { InputContainer, InputLabel, InputField } from "./Input.styled";

type InputProps = {
  labelText: string;
  inputType: string;
  inputName: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ labelText, inputType, inputName, value, placeholder, onChange }: InputProps): React.ReactElement => {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <InputField type={inputType} name={inputName} onChange={onChange} value={value} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
