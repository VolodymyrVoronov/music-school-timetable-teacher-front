import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { IoMdCreate, IoMdTrash } from "react-icons/io";

import { StudentFormItemContainer, StudentFormItemText, StudentFormItemButtons, StudentFormItemButton } from "./StudentFormItem.styled";

const StudentFormItem = (): React.ReactElement => {
  const onEditButtonClick = () => {
    console.log("edit");
  };

  const onDeleteButtonClick = () => {
    console.log("delete");
  };

  return (
    <Slide top>
      <StudentFormItemContainer>
        <StudentFormItemText>Катерина Котова</StudentFormItemText>

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
