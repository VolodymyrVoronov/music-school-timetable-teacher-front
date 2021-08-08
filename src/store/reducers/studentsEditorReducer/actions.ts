import { Dispatch } from "redux";

import { newStudent, fetchStudents, deleteStudent, updateStudent } from "./../../../api/api";

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

export const getStudentToUpdatedAC = (studentToUpdate: string) => ({
  type: Actions.GET_STUDENT_TO_UPDATE,
  payload: studentToUpdate,
});

export const isStudentsActionSucceedAC = (isStudentsActionSucceed: boolean) => ({
  type: Actions.SET_STUDENTS_ACTION_SUCCEED,
  payload: isStudentsActionSucceed,
});

export const isStudentsActionFailedAC = (isStudentsActionFailed: boolean) => ({
  type: Actions.SET_STUDENTS_ACTION_FAILED,
  payload: isStudentsActionFailed,
});

export const addNewStudent = (newStudentData: NewStudentData) => async (dispatch: Dispatch) => {
  try {
    dispatch(loadginStudentAC(true));
    const responseNewStudent = await newStudent(newStudentData);
    if (responseNewStudent.status === 201) {
      dispatch(addNewStudentAC(responseNewStudent.data));
      dispatch(loadginStudentAC(false));
    }

    const response = await fetchStudents();
    if (response.status === 200) {
      dispatch(getStudentAC(response.data));
      dispatch(loadginStudentAC(false));

      dispatch(isStudentsActionSucceedAC(true));
      dispatch(isStudentsActionFailedAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadginStudentAC(false));

    dispatch(isStudentsActionSucceedAC(false));
    dispatch(isStudentsActionFailedAC(true));
  }
};

export const getStudents = () => async (dispatch: Dispatch) => {
  try {
    dispatch(loadginStudentAC(true));
    const response = await fetchStudents();
    if (response.status === 200) {
      dispatch(getStudentAC(response.data));
      dispatch(loadginStudentAC(false));

      dispatch(isStudentsActionSucceedAC(true));
      dispatch(isStudentsActionFailedAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadginStudentAC(false));

    dispatch(isStudentsActionSucceedAC(false));
    dispatch(isStudentsActionFailedAC(true));
  }
};

export const deleteStudentAC = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(loadginStudentAC(true));
    await deleteStudent(id);

    const response = await fetchStudents();
    if (response.status === 200) {
      dispatch(getStudentAC(response.data));
      dispatch(loadginStudentAC(false));

      dispatch(isStudentsActionSucceedAC(true));
      dispatch(isStudentsActionFailedAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadginStudentAC(false));

    dispatch(isStudentsActionSucceedAC(false));
    dispatch(isStudentsActionFailedAC(true));
  }
};

export const updateStudentAC = (id: string, updatedStudent: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(loadginStudentAC(true));
    await updateStudent(id, updatedStudent);

    const response = await fetchStudents();
    if (response.status === 200) {
      dispatch(getStudentAC(response.data));
      dispatch(loadginStudentAC(false));
      dispatch(getStudentToUpdatedAC(""));

      dispatch(isStudentsActionSucceedAC(true));
      dispatch(isStudentsActionFailedAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadginStudentAC(false));

    dispatch(isStudentsActionSucceedAC(false));
    dispatch(isStudentsActionFailedAC(true));
  }
};