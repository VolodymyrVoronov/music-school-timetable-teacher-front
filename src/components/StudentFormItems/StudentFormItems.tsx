import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import StudentFormItem from "./../StudentFormItem/StudentFormItem";
import LoaderSpinner from "./../common/UI/LoaderSpinner/LoaderSpinner";

import { StudentFormItemsContainer, StudentFormItemsText } from "./StudentFormItems.styled";

const StudentFormItems = (): React.ReactElement => {
  const { students, loadingStudents } = useSelector((state: RootState) => state.studentsEditorReducer);

  return (
    <StudentFormItemsContainer>
      {loadingStudents && <LoaderSpinner />}

      {!loadingStudents && (
        <>
          {students.map((student) => {
            const { _id, firstName, secondName, studentClass } = student;

            return <StudentFormItem key={_id} _id={_id} firstName={firstName} secondName={secondName} studentClass={studentClass} />;
          })}
        </>
      )}

      {students.length === 0 && !loadingStudents && <StudentFormItemsText>Список учеников пуст. 📃</StudentFormItemsText>}
    </StudentFormItemsContainer>
  );
};

export default StudentFormItems;
