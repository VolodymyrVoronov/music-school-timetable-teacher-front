import { TimeTablesCardType } from "./timeTableEditorReducer";

export const Actions = {
  SET_CURRENT_DRUG_ID: "timetableEditro/SET_CURRENT_DRUG_ID",
  SET_NEW_TIME_TABLE_EDITOR_CARDS: "timetableEditro/SET_NEW_TIME_TABLE_EDITOR_CARDS",
  UPDATE_TIME_TABLE_EDITOR_CARDS: "timetableEditro/UPDATE_TIME_TABLE_EDITOR_CARDS",
};

export interface SetCurrentDrugIdType {
  type: typeof Actions.SET_CURRENT_DRUG_ID;
  payload: string;
}

export interface SetNewTimeTableEditorCardsType {
  type: typeof Actions.SET_NEW_TIME_TABLE_EDITOR_CARDS;
  payload: TimeTablesCardType[];
}

export interface UpdateTimeTableEditorCardsType {
  type: typeof Actions.UPDATE_TIME_TABLE_EDITOR_CARDS;
  payload: TimeTablesCardType[];
}

export type ActionTypes = SetNewTimeTableEditorCardsType | SetCurrentDrugIdType | UpdateTimeTableEditorCardsType;
