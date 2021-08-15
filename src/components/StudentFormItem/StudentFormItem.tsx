import React from "react";
import { useDispatch } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";
import { IoMdCreate, IoMdTrash } from "react-icons/io";

import { deleteStudentAC, getStudentToUpdatedAC } from "../../store/reducers/studentsEditorReducer/actions";

import {
  StudentFormItemContainer,
  StudentFormItemText,
  StudentFormItemButtons,
  StudentFormItemButton,
} from "./StudentFormItem.styled";

interface StudentFormItemProps {
  _id: string;
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher?: string;
}

const StudentFormItem = ({ _id, firstName, secondName, studentClass }: StudentFormItemProps): React.ReactElement => {
  const dispatch = useDispatch();

  const onEditButtonClick = () => {
    dispatch(getStudentToUpdatedAC(_id));
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteStudentAC(_id));
  };

  return (
    <Slide top>
      <StudentFormItemContainer>
        <StudentFormItemText>
          {firstName} {secondName}
        </StudentFormItemText>
        <StudentFormItemText ta ml>
          {studentClass}
        </StudentFormItemText>

        <StudentFormItemButtons>
          <StudentFormItemButton onClick={() => onEditButtonClick()}>
            <IoMdCreate />
          </StudentFormItemButton>

          <StudentFormItemButton onClick={() => onDeleteButtonClick()}>
            <IoMdTrash />
          </StudentFormItemButton>
        </StudentFormItemButtons>
      </StudentFormItemContainer>
    </Slide>
  );
};

export default StudentFormItem;
