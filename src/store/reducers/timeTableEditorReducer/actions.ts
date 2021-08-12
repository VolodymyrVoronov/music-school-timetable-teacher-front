import { Dispatch, AnyAction } from "redux";

import { typedAction } from "../helpers";

import { GET_CHOSEN_DATE, SET_CURRENT_DRUG_ID, SET_NEW_TIME_TABLE_EDITOR_CARDS, UPDATE_TIME_TABLE_EDITOR_CARDS, GET_CARD_TO_UPDATE } from "./actionTypes";

import { TimeTablesCardType } from "./timeTableEditorReducer";

export const setCurrentDrugIdAC = (dragId: string) => {
  return typedAction(SET_CURRENT_DRUG_ID, { dragId });
};

export const setNewTimeTableEditorAC = (newCards: TimeTablesCardType[]) => {
  return typedAction(SET_NEW_TIME_TABLE_EDITOR_CARDS, { newCards });
};

export const updateTimeTableEditorCardsAC = (updatedCard: { lessonStart: string; lessonEnd: string; student: string }, boxId: string) => {
  return typedAction(UPDATE_TIME_TABLE_EDITOR_CARDS, { updatedCard, boxId });
};

export const getChosenDateAC = (chosenDate: string) => {
  return typedAction(GET_CHOSEN_DATE, { chosenDate });
};

export const getCardToUpdatedAC = (cardId: string) => {
  return typedAction(GET_CARD_TO_UPDATE, { cardId });
};

export type ActionTypes = ReturnType<typeof setCurrentDrugIdAC | typeof setNewTimeTableEditorAC | typeof updateTimeTableEditorCardsAC | typeof getChosenDateAC | typeof getCardToUpdatedAC>;

// export const loadProducts = () => {
//   return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
//     setTimeout(() => {
//       dispatch(
//         setProducts([...getState().products.products, ...sampleProducts])
//       );
//     }, 500);
//   };
// };
