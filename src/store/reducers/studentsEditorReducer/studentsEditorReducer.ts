import { ActionTypes } from "./actions";

import {
  ADD_NEW_STUDENT,
  GET_STUDENTS,
  GET_STUDENT_TO_UPDATE,
  LOADING_STUDENTS,
  SET_STUDENTS_ACTION_FAILED,
  SET_STUDENTS_ACTION_SUCCEED,
} from "./actionTypes";

export interface NewStudentType {
  firstName: string;
  secondName: string;
  studentClass: string;
}

export interface StudentsType {
  _id: string;
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher: string;
}

interface StudentsEditorReducerStateType {
  studentClasses: { id: number; studentClass: string }[];
  newStudent: NewStudentType[];
  students: StudentsType[];
  loadingStudents: boolean;
  studentToUpdate: StudentsType[];
  isStudentsActionSucceed: boolean | undefined;
  isStudentsActionFailed: boolean | undefined;
}

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
  loadingStudents: false,
  studentToUpdate: [],
  isStudentsActionSucceed: undefined,
  isStudentsActionFailed: undefined,
};

const studentsEditorReducer = (
  state: StudentsEditorReducerStateType = initialState,
  action: ActionTypes
): StudentsEditorReducerStateType => {
  switch (action.type) {
    case ADD_NEW_STUDENT: {
      return {
        ...state,
        newStudent: action.payload.newStudentData,
      };
    }

    case GET_STUDENTS: {
      return {
        ...state,
        students: action.payload.students,
      };
    }

    case LOADING_STUDENTS: {
      return {
        ...state,
        loadingStudents: action.payload.loadingStudents,
      };
    }

    case GET_STUDENT_TO_UPDATE: {
      return {
        ...state,
        studentToUpdate: state.students.filter((student) => student._id === action.payload.studentToUpdate),
      };
    }

    case SET_STUDENTS_ACTION_SUCCEED: {
      return {
        ...state,
        isStudentsActionSucceed: action.payload.isStudentsActionSucceed,
        isStudentsActionFailed: (state.isStudentsActionFailed = false),
      };
    }

    case SET_STUDENTS_ACTION_FAILED: {
      return {
        ...state,
        isStudentsActionFailed: action.payload.isStudentsActionFailed,
        isStudentsActionSucceed: (state.isStudentsActionSucceed = false),
      };
    }

    default:
      return state;
  }
};

export default studentsEditorReducer;
