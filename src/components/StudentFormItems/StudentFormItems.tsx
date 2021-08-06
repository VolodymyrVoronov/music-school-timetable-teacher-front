import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import { StudentFormItemsContainer } from "./StudentFormItems.styled";
import StudentFormItem from "./../StudentFormItem/StudentFormItem";

const StudentFormItems = (): React.ReactElement => {
  const { students } = useSelector((state: RootState) => state.studentsEditorReducer);

  return (
    <StudentFormItemsContainer>
      {students.length === 0 ? (
        "loaging"
      ) : (
        <>
          {students.map((student) => {
            const { _id, firstName, secondName, teacher } = student;

            return <StudentFormItem _id={_id} firstName={firstName} secondName={secondName} />;
          })}
        </>
      )}
    </StudentFormItemsContainer>
  );
};

export default StudentFormItems;
