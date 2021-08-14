import { ActionTypes } from "./actions";

import {
  SET_CURRENT_DRUG_ID,
  SET_NEW_TIME_TABLE_EDITOR_CARDS,
  UPDATE_TIME_TABLE_EDITOR_CARDS,
  GET_CHOSEN_DATE,
  GET_CARD_TO_UPDATE,
} from "./actionTypes";

export interface TimeTablesCardType {
  cardId: string;
  order: number;
  data: {
    lessonStart: string;
    lessonEnd: string;
    student: string;
  };
}

interface TimeTableEditorReducerStateType {
  dragId: string;
  date: string;
  timeTablesCards: TimeTablesCardType[];
  // updatedTimeTablesCards: TimeTablesCardType[];
  cardToUpdate: any;
}

const initialState = {
  dragId: "",
  date: "",
  timeTablesCards: [
    {
      cardId: "Box-1",
      order: 1,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-2",
      order: 2,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-3",
      order: 3,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-4",
      order: 4,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-5",
      order: 5,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-6",
      order: 6,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-7",
      order: 7,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-8",
      order: 8,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-9",
      order: 9,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
    {
      cardId: "Box-10",
      order: 10,
      data: {
        lessonStart: ``,
        lessonEnd: ``,
        student: ``,
      },
    },
  ],
  cardToUpdate: [],
  // updatedTimeTablesCards: [],
};

const timeTableEditorReducer = (
  state: TimeTableEditorReducerStateType = initialState,
  action: ActionTypes
): TimeTableEditorReducerStateType => {
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
      const newTimeTableEditorCard = {
        lessonStart: action.payload.updatedCard.lessonStart,
        lessonEnd: action.payload.updatedCard.lessonEnd,
        student: action.payload.updatedCard.student,
      };
      return {
        ...state,
        timeTablesCards: state.timeTablesCards.map((card) => {
          if (card.cardId === action.payload.boxId) {
            return {
              ...card,
              data: {
                ...newTimeTableEditorCard,
              },
            };
          }
          return card;
        }) as TimeTablesCardType[],
      };
    }

    case GET_CHOSEN_DATE: {
      return {
        ...state,
        date: action.payload.chosenDate,
      };
    }

    case GET_CARD_TO_UPDATE: {
      return {
        ...state,
        cardToUpdate: state.timeTablesCards.filter((card) => card.cardId === action.payload.cardId),
      };
    }

    default:
      return state;
  }
};

export default timeTableEditorReducer;
