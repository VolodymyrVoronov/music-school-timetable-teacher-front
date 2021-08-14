import { Dispatch, AnyAction } from "redux";

import { RootState } from "../../store";

import { newTimetable, fetchTimetable, updateTimetable } from "../../../api/api";

import { typedAction } from "../helpers";

import {
  GET_CHOSEN_DATE,
  SET_CURRENT_DRUG_ID,
  SET_NEW_TIME_TABLE_EDITOR_CARDS,
  UPDATE_TIME_TABLE_EDITOR_CARDS,
  GET_CARD_TO_UPDATE,
  LOADING_TIME_TABLE,
} from "./actionTypes";

import { TimeTablesCardType } from "./timeTableEditorReducer";

import { cards } from "./../../../components/data/cardsShape";

export const setCurrentDrugIdAC = (dragId: string) => {
  return typedAction(SET_CURRENT_DRUG_ID, { dragId });
};

export const setNewTimeTableEditorAC = (newCards: TimeTablesCardType[]) => {
  return typedAction(SET_NEW_TIME_TABLE_EDITOR_CARDS, { newCards });
};

export const updateTimeTableEditorCardsAC = (
  updatedCard: { lessonStart: string; lessonEnd: string; student: string },
  boxId: string
) => {
  return typedAction(UPDATE_TIME_TABLE_EDITOR_CARDS, { updatedCard, boxId });
};

export const getChosenDateAC = (chosenDate: string) => {
  return typedAction(GET_CHOSEN_DATE, { chosenDate });
};

export const getCardToUpdatedAC = (cardId: string) => {
  return typedAction(GET_CARD_TO_UPDATE, { cardId });
};

export const loadingTimetableAC = (isLoading: boolean) => {
  return typedAction(LOADING_TIME_TABLE, { isLoading });
};

export const setNewTimetableAC = () => async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
  try {
    dispatch(loadingTimetableAC(true));
    const newTimetableData = {
      cards: getState().timeTableEditorReducer.timeTablesCards,
      date: getState().timeTableEditorReducer.date,
    };
    console.log(newTimetableData);

    await newTimetable(newTimetableData);
    dispatch(loadingTimetableAC(false));
  } catch (error) {
    console.log(error);
    dispatch(loadingTimetableAC(false));
  }
};

export const fetchTimetableAC = (chosenDate?: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(loadingTimetableAC(true));
    const response = await fetchTimetable();

    if (response.status === 200) {
      const filteredCards = response.data.filter((d: { date: string }) => d.date === chosenDate);

      if (filteredCards.length !== 0) {
        dispatch(setNewTimeTableEditorAC(filteredCards[0].cards));
      } else {
        dispatch(setNewTimeTableEditorAC(cards));
      }
    }
    dispatch(loadingTimetableAC(false));
  } catch (error) {
    console.log(error);
    dispatch(loadingTimetableAC(false));
  }
};

export const updateTimetableAC = (id: string) => async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
  try {
    const updatedTimetableData = {
      cards: getState().timeTableEditorReducer.timeTablesCards,
      date: getState().timeTableEditorReducer.date,
    };
    console.log(updatedTimetableData);

    updateTimetable(id, updatedTimetableData);
  } catch (error) {
    console.log(error);
  }
};

export type ActionTypes = ReturnType<
  | typeof setCurrentDrugIdAC
  | typeof setNewTimeTableEditorAC
  | typeof updateTimeTableEditorCardsAC
  | typeof getChosenDateAC
  | typeof getCardToUpdatedAC
  | typeof loadingTimetableAC
>;
