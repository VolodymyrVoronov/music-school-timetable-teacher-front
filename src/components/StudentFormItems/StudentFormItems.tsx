import React from "react";

import { StudentFormItemsContainer } from "./StudentFormItems.styled";
import StudentFormItem from "./../StudentFormItem/StudentFormItem";

const StudentFormItems = (): React.ReactElement => {
  return (
    <StudentFormItemsContainer>
      <StudentFormItem />
    </StudentFormItemsContainer>
  );
};

export default StudentFormItems;
