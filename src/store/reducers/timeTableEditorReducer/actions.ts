import { Dispatch } from "redux";

import { Actions } from "./actionTypes";
import { TimeTablesCardType } from "./timeTableEditorReducer";

export const setCurrentDrugIdAC = (dragId: string) => ({
  type: Actions.SET_CURRENT_DRUG_ID,
  payload: dragId,
});

export const setNewTimeTableEditorAC = (newCards: TimeTablesCardType[]) => ({
  type: Actions.SET_NEW_TIME_TABLE_EDITOR_CARDS,
  payload: newCards,
});
