import { Reducer } from "redux";

import { ActionTypes, Actions } from "./actionTypes";

export type NewStudentType = {
  firstName: string;
  secondName: string;
  studentClass: string;
};

export type StudentsType = {
  _id: string;
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher: string;
};

type StudentsEditorReducerStateType = {
  studentClasses: { id: number; studentClass: string }[];
  newStudent: NewStudentType[];
  students: StudentsType[];
};

const initialState = {
  studentClasses: [
    { id: 0, studentClass: "" },
    { id: 1, studentClass: "1 класс" },
    { id: 2, studentClass: "2 класс" },
    { id: 3, studentClass: "3 класс" },
    { id: 4, studentClass: "4 класс" },
    { id: 5, studentClass: "5 класс" },
    { id: 6, studentClass: "6 класс" },
    { id: 7, studentClass: "7 класс" },
    { id: 8, studentClass: "8 класс" },
    { id: 9, studentClass: "9 класс" },
    { id: 10, studentClass: "10 класс" },
    { id: 11, studentClass: "11 класс" },
    { id: 12, studentClass: "12 класс" },
  ],
  newStudent: [],
  students: [],
};

const studentsEditorReducer: Reducer<StudentsEditorReducerStateType, ActionTypes> = (state = initialState, action: ActionTypes): StudentsEditorReducerStateType => {
  switch (action.type) {
    case Actions.ADD_NEW_STUDENT: {
      return {
        ...state,
        newStudent: action.payload as NewStudentType[],
      };
    }

    case Actions.GET_STUDENTS: {
      return {
        ...state,
        students: action.payload as StudentsType[],
      };
    }

    default:
      return state;
  }
};

export default studentsEditorReducer;
