import { NewStudentType, StudentsType } from "./studentsEditorReducer";

export const Actions = {
  ADD_NEW_STUDENT: "students/ADD_NEW_STUDENT",
  GET_STUDENTS: "students/GET_STUDENTS",
};

export interface AddNewStudentType {
  type: typeof Actions.ADD_NEW_STUDENT;
  payload: NewStudentType[];
}

export interface GetStudent {
  type: typeof Actions.GET_STUDENTS;
  payload: StudentsType[];
}

export type ActionTypes = AddNewStudentType | GetStudent;
