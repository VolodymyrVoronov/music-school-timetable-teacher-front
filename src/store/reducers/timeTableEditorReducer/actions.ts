import { Dispatch, AnyAction } from "redux";

import { typedAction } from "../helpers";

import { SET_CURRENT_DRUG_ID, SET_NEW_TIME_TABLE_EDITOR_CARDS, UPDATE_TIME_TABLE_EDITOR_CARDS } from "./actionTypes";

import { TimeTablesCardType } from "./timeTableEditorReducer";

export const setCurrentDrugIdAC = (dragId: string) => {
  return typedAction(SET_CURRENT_DRUG_ID, { dragId });
};

export const setNewTimeTableEditorAC = (newCards: TimeTablesCardType[]) => {
  return typedAction(SET_NEW_TIME_TABLE_EDITOR_CARDS, { newCards });
};

export const updateTimeTableEditorCardsAC = (updatedCards: TimeTablesCardType[], date: string, boxId: string) => {
  return typedAction(UPDATE_TIME_TABLE_EDITOR_CARDS, { updatedCards, date, boxId });
};

export type ActionTypes = ReturnType<typeof setCurrentDrugIdAC | typeof setNewTimeTableEditorAC | typeof updateTimeTableEditorCardsAC>;


// export const loadProducts = () => {
//   return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
//     setTimeout(() => {
//       dispatch(
//         setProducts([...getState().products.products, ...sampleProducts])
//       );
//     }, 500);
//   };
// };