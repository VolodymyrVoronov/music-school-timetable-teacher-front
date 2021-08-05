import React from "react";
import { useHistory } from "react-router-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Button from "../common/UI/Button/Button";
import Input from "../Input/Input";
import StudentFormItems from "../StudentFormItems/StudentFormItems";

import { StudentsEditorContainer, StudentsEditorContainerLeft, StudentsEditorContainerRight, StudentsEditorContainerRightLabel, StudentsEditorContainerRightSelectInput, StudentsEditorContainerRightSelectOption, StudentsEditorContainerRightButtonsBlock } from "./StudentsEditor.styled";

type FormData = {
  _id?: string;
  firstName: string;
  secondName: string;
  studentClass: string;
};

const initialFormState = {
  firstName: "",
  secondName: "",
  studentClass: "",
};

const studentClasses = [
  { id: 1, studentClass: "1 класс" },
  { id: 2, studentClass: "2 класс" },
  { id: 3, studentClass: "3 класс" },
  { id: 4, studentClass: "4 класс" },
  { id: 5, studentClass: "5 класс" },
  { id: 6, studentClass: "6 класс" },
  { id: 7, studentClass: "7 класс" },
  { id: 8, studentClass: "8 класс" },
  { id: 9, studentClass: "9 класс" },
  { id: 10, studentClass: "10 класс" },
  { id: 11, studentClass: "11 класс" },
  { id: 12, studentClass: "12 класс" },
];

const StudentsEditor = (): React.ReactElement => {
  const history = useHistory();
  const [formData, setFormData] = React.useState<FormData>(initialFormState);

  const token = JSON.parse(localStorage.getItem("profile") || "{}").token;

  if (!token) {
    history.replace("/start-page");
  }

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const onSaveButtonClick = () => {};

  const onCancelButtonClick = () => {
    history.replace("/account");
  };

  return (
    <Slide top>
      <StudentsEditorContainer>
        <StudentsEditorContainerLeft>
          <StudentFormItems />
        </StudentsEditorContainerLeft>
        <StudentsEditorContainerRight>
          <Slide top>
            <Input labelText="Имя" inputType="text" inputName="firstName" onChange={onFormInputChange} value={formData.firstName} placeholder="Катерина" />
          </Slide>

          <Slide top>
            <Input labelText="Фамилия" inputType="text" inputName="secondName" onChange={onFormInputChange} value={formData.secondName} placeholder="Котова" />
          </Slide>

          <Slide top>
            <StudentsEditorContainerRightLabel>Класс</StudentsEditorContainerRightLabel>
          </Slide>

          <Slide top>
            <StudentsEditorContainerRightSelectInput name="studentClass" onChange={onFormInputChange}>
              {studentClasses.map((sc) => {
                const { id, studentClass } = sc;

                return (
                  <StudentsEditorContainerRightSelectOption defaultValue={formData.studentClass} key={id}>
                    {studentClass}
                  </StudentsEditorContainerRightSelectOption>
                );
              })}
            </StudentsEditorContainerRightSelectInput>
          </Slide>

          <Slide top>
            <StudentsEditorContainerRightButtonsBlock>
              <Button text="Сохранить" primary={false} mr="7.5px" onClick={() => {}} />
              <Button text="Отмена" primary={false} ml="7.5px" onClick={onCancelButtonClick} />
            </StudentsEditorContainerRightButtonsBlock>
          </Slide>
        </StudentsEditorContainerRight>
      </StudentsEditorContainer>
    </Slide>
  );
};

export default StudentsEditor;
