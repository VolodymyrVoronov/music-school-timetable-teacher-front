import { AnyAction, Dispatch } from "redux";

import { newStudent, fetchStudents, deleteStudent, updateStudent } from "./../../../api/api";

import { typedAction } from "./../helpers";

import { NewStudentType, StudentsType } from "./studentsEditorReducer";

import {
  ADD_NEW_STUDENT,
  GET_STUDENTS,
  LOADING_STUDENTS,
  GET_STUDENT_TO_UPDATE,
  SET_STUDENTS_ACTION_SUCCEED,
  SET_STUDENTS_ACTION_FAILED,
} from "./actionTypes";

export const addNewStudentAC = (newStudentData: NewStudentType[]) => typedAction(ADD_NEW_STUDENT, { newStudentData });

export const getStudentAC = (students: StudentsType[]) => typedAction(GET_STUDENTS, { students });

export const loadginStudentAC = (loadingStudents: boolean) => typedAction(LOADING_STUDENTS, { loadingStudents });

export const getStudentToUpdatedAC = (studentToUpdate: string) =>
  typedAction(GET_STUDENT_TO_UPDATE, { studentToUpdate });

export const isStudentsActionSucceedAC = (isStudentsActionSucceed: boolean) =>
  typedAction(SET_STUDENTS_ACTION_SUCCEED, { isStudentsActionSucceed });

export const isStudentsActionFailedAC = (isStudentsActionFailed: boolean) =>
  typedAction(SET_STUDENTS_ACTION_FAILED, { isStudentsActionFailed });

export const addNewStudent = (newStudentData: NewStudentType) => async (dispatch: Dispatch<AnyAction>) => {
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

export const getStudents = () => async (dispatch: Dispatch<AnyAction>) => {
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

export const deleteStudentAC = (id: string) => async (dispatch: Dispatch<AnyAction>) => {
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

export const updateStudentAC = (id: string, updatedStudent: any) => async (dispatch: Dispatch<AnyAction>) => {
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

export type ActionTypes = ReturnType<
  | typeof addNewStudentAC
  | typeof getStudentAC
  | typeof loadginStudentAC
  | typeof getStudentToUpdatedAC
  | typeof isStudentsActionSucceedAC
  | typeof isStudentsActionFailedAC
>;
