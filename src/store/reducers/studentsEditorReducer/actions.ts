import { Dispatch } from "redux";

import { newStudent } from "./../../../api/api";

import { Actions } from "./actionTypes";

type NewStudentData = {
  firstName: string;
  secondName: string;
  studentClass: string;
};

export const addNewStudentAC = (newStudentData: NewStudentData) => ({
  type: Actions.ADD_NEW_STUDENT,
  payload: newStudentData,
});

export const addNewStudent = (newStudentData: NewStudentData) => async (dispatch: Dispatch) => {
  try {
    const response = await newStudent(newStudentData);
    if (response.status === 200) {
      dispatch(addNewStudentAC(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};
