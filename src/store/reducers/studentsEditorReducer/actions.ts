import { Dispatch } from "redux";

import { newStudent, fetchStudents } from "./../../../api/api";

import { Actions } from "./actionTypes";

interface NewStudentData {
  firstName: string;
  secondName: string;
  studentClass: string;
}

interface StudentsData {
  _id: string;
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher: string;
}

export const addNewStudentAC = (newStudentData: NewStudentData) => ({
  type: Actions.ADD_NEW_STUDENT,
  payload: newStudentData,
});

export const getStudentAC = (students: StudentsData) => ({
  type: Actions.GET_STUDENTS,
  payload: students,
});

export const loadginStudentAC = (loadingStudents: boolean) => ({
  type: Actions.LOADING_STUDENTS,
  payload: loadingStudents,
});

export const addNewStudent = (newStudentData: NewStudentData) => async (dispatch: Dispatch) => {
  try {
    dispatch(loadginStudentAC(true));
    const response = await newStudent(newStudentData);
    if (response.status === 200) {
      dispatch(addNewStudentAC(response.data));
      dispatch(loadginStudentAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadginStudentAC(false));
  }
};

export const getStudents = () => async (dispatch: Dispatch) => {
  try {
    dispatch(loadginStudentAC(true));
    const response = await fetchStudents();
    if (response.status === 200) {
      dispatch(getStudentAC(response.data));
      dispatch(loadginStudentAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadginStudentAC(false));
  }
};
