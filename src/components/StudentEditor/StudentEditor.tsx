import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Input from "../Input/Input";

import { StudentEditorContainer, StudentEditorContainerLeft, StudentEditorContainerRight } from "./StudentEditor.styled";

type FormData = {
  firstName: string;
  secondName: string;
  class: string;
};

const initialFormState = {
  firstName: "",
  secondName: "",
  class: "",
};

const StudentEditor = (): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Slide top>
      <StudentEditorContainer>
        <StudentEditorContainerLeft>Left</StudentEditorContainerLeft>
        <StudentEditorContainerRight>
          <Slide top>
            <Input labelText="Имя" inputType="text" inputName="firstName" onChange={onFormInputChange} value={formData.firstName} placeholder="Катерина" />
          </Slide>

          <Slide top>
            <Input labelText="Фамилия" inputType="text" inputName="secondName" onChange={onFormInputChange} value={formData.secondName} placeholder="Котова" />
          </Slide>
        </StudentEditorContainerRight>
      </StudentEditorContainer>
    </Slide>
  );
};

export default StudentEditor;
