import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import { StudentFormItemsContainer, StudentFormItemsText } from "./StudentFormItems.styled";
import StudentFormItem from "./../StudentFormItem/StudentFormItem";
import LoaderSpinner from "./../common/UI/LoaderSpinner/LoaderSpinner";

const StudentFormItems = (): React.ReactElement => {
  const { students, loadingStudents } = useSelector((state: RootState) => state.studentsEditorReducer);

  return (
    <StudentFormItemsContainer>
      {loadingStudents && <LoaderSpinner />}

      {!loadingStudents && (
        <>
          {students.map((student) => {
            const { _id, firstName, secondName, teacher } = student;

            return <StudentFormItem key={_id} _id={_id} firstName={firstName} secondName={secondName} />;
          })}
        </>
      )}

      {students.length === 0 && <StudentFormItemsText>Список учеников пуст. 📃</StudentFormItemsText>}
    </StudentFormItemsContainer>
  );
};

export default StudentFormItems;
