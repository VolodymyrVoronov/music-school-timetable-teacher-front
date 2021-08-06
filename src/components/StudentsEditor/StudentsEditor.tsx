import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";
import { addNewStudent } from "../../store/reducers/studentsEditorReducer/actions";

import Button from "../common/UI/Button/Button";
import Input from "../Input/Input";
import StudentFormItems from "../StudentFormItems/StudentFormItems";

import { checkInputsStudentsEditorFormValidity } from "../../helpers/checkInputsStudentsEditorFormValidity";

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

const StudentsEditor = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { studentClasses } = useSelector((state: RootState) => state.studentsEditorReducer);
  const [isValid, setIsValid] = React.useState(false);
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

  const onSaveButtonClick = () => {
    console.log("save");

    dispatch(addNewStudent(formData));
  };

  const onCancelButtonClick = () => {
    history.replace("/account");
  };

  React.useEffect(() => {
    setIsValid(checkInputsStudentsEditorFormValidity(formData.firstName, formData.secondName));
  }, [formData.firstName, formData.secondName]);

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
              <Button text="Сохранить" primary={false} disabled={!isValid} mr="7.5px" onClick={onSaveButtonClick} />
              <Button text="Отмена" primary={false} ml="7.5px" onClick={onCancelButtonClick} />
            </StudentsEditorContainerRightButtonsBlock>
          </Slide>
        </StudentsEditorContainerRight>
      </StudentsEditorContainer>
    </Slide>
  );
};

export default StudentsEditor;
