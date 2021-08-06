import { Dispatch } from "redux";

import { newStudent, fetchStudents } from "./../../../api/api";

import { Actions } from "./actionTypes";

type NewStudentData = {
  firstName: string;
  secondName: string;
  studentClass: string;
};

type StudentsData = {
  _id: string;
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher: string;
};

export const addNewStudentAC = (newStudentData: NewStudentData) => ({
  type: Actions.ADD_NEW_STUDENT,
  payload: newStudentData,
});

export const getStudentAC = (students: StudentsData) => ({
  type: Actions.GET_STUDENTS,
  payload: students,
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

export const getStudents = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetchStudents();

    if (response.status === 200) {
      dispatch(getStudentAC(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};
