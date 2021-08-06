import { NewStudentType } from "./studentsEditorReducer";

export const Actions = {
  ADD_NEW_STUDENT: "students/ADD_NEW_STUDENT",
};

export interface AddNewStudentType {
  type: typeof Actions.ADD_NEW_STUDENT;
  payload: NewStudentType[];
}

export type ActionTypes = AddNewStudentType;
