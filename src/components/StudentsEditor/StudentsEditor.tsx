import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";
import { addNewStudent, getStudents, updateStudentAC, getStudentToUpdatedAC } from "../../store/reducers/studentsEditorReducer/actions";

import { checkInputsStudentsEditorFormValidity } from "../../helpers/checkInputsStudentsEditorFormValidity";

import Button from "../common/UI/Button/Button";
import Input from "../Input/Input";
import StudentFormItems from "../StudentFormItems/StudentFormItems";
import LoaderSpinner from "../common/UI/LoaderSpinner/LoaderSpinner";

import { StudentsEditorContainer, StudentsEditorContainerLeft, StudentsEditorContainerRight, StudentsEditorContainerRightLabel, StudentsEditorContainerRightSelectInput, StudentsEditorContainerRightSelectOption, StudentsEditorContainerRightButtonsBlock } from "./StudentsEditor.styled";

interface FormData {
  _id?: string;
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher?: string;
}

const initialFormState = {
  firstName: "",
  secondName: "",
  studentClass: "",
};

const StudentsEditor = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { studentClasses, loadingStudents, studentToUpdate } = useSelector((state: RootState) => state.studentsEditorReducer);

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

  const onSaveButtonClick = () => {
    if (studentToUpdate.length !== 0) {
      dispatch(updateStudentAC(studentToUpdate[0]._id, formData));
      setFormData(initialFormState);
    } else {
      dispatch(addNewStudent(formData));
      setFormData(initialFormState);
    }
  };

  const onCancelButtonClick = () => {
    history.replace("/account");
    dispatch(getStudentToUpdatedAC(""));
  };

  React.useEffect(() => {
    setIsValid(checkInputsStudentsEditorFormValidity(formData.firstName, formData.secondName, formData.studentClass));
  }, [formData.firstName, formData.secondName, formData.studentClass]);

  React.useEffect(() => {
    dispatch(getStudents());
  }, []);

  React.useEffect(() => {
    if (studentToUpdate.length !== 0) {
      setFormData(studentToUpdate[0]);
    }
  }, [studentToUpdate]);

  return (
    <Slide top>
      <StudentsEditorContainer>
        <StudentsEditorContainerLeft>
          <StudentFormItems />
        </StudentsEditorContainerLeft>

        <StudentsEditorContainerRight>
          {loadingStudents ? (
            <LoaderSpinner bgColor="white" />
          ) : (
            <>
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
                <StudentsEditorContainerRightSelectInput name="studentClass" onChange={onFormInputChange} defaultValue={"DEFAULT"}>
                  <StudentsEditorContainerRightSelectOption value="DEFAULT" disabled>
                    {studentToUpdate.length !== 0 ? studentToUpdate[0]?.studentClass : ""}
                  </StudentsEditorContainerRightSelectOption>
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
            </>
          )}
        </StudentsEditorContainerRight>
      </StudentsEditorContainer>
    </Slide>
  );
};

export default StudentsEditor;
