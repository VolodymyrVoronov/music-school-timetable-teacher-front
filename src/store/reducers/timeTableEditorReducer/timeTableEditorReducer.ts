import { Reducer, Action } from "redux";

import { SET_CURRENT_DRUG_ID, SET_NEW_TIME_TABLE_EDITOR_CARDS, UPDATE_TIME_TABLE_EDITOR_CARDS } from "./actionTypes";
import { ActionTypes } from "./actions";

export interface TimeTablesCardType {
  date?: string;
  id: string;
  order: number;
  data: {
    lessonStart: string;
    lessonEnd: string;
    student: string;
  };
}

interface TimeTableEditorReducerStateType {
  dragId: string;
  timeTablesCards: TimeTablesCardType[];
  updatedTimeTablesCards: TimeTablesCardType[];
}

const initialState = {
  dragId: "",
  timeTablesCards: [
    {
      id: "Box-1",
      order: 1,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-2",
      order: 2,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-3",
      order: 3,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-4",
      order: 4,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-5",
      order: 5,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-6",
      order: 6,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-7",
      order: 7,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-8",
      order: 8,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-9",
      order: 9,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      id: "Box-10",
      order: 10,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
  ],
  updatedTimeTablesCards: [],
};

const timeTableEditorReducer = (state: TimeTableEditorReducerStateType = initialState, action: ActionTypes): TimeTableEditorReducerStateType => {
  switch (action.type) {
    case SET_CURRENT_DRUG_ID: {
      return {
        ...state,
        dragId: action.payload.dragId,
      };
    }

    case SET_NEW_TIME_TABLE_EDITOR_CARDS: {
      return {
        ...state,
        timeTablesCards: action.payload.newCards,
      };
    }

    case UPDATE_TIME_TABLE_EDITOR_CARDS: {
      return {
        ...state,
        // updatedTimeTablesCards: ,
      };
    }

    default:
      return state;
  }
};

export default timeTableEditorReducer;
