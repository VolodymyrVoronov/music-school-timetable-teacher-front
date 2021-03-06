import { Dispatch, AnyAction } from "redux";

import { RootState } from "../../store";

import { newTimetable, fetchTimetable, updateTimetable } from "../../../api/api";

import { typedAction } from "../helpers";

import { TimeTablesCardType } from "./timeTableEditorReducer";

import {
  GET_CHOSEN_DATE,
  SET_CURRENT_DRUG_ID,
  SET_NEW_TIME_TABLE_EDITOR_CARDS,
  UPDATE_TIME_TABLE_EDITOR_CARDS,
  GET_CARD_TO_UPDATE,
  LOADING_TIME_TABLE,
  SET_CARDS_ID_TO_UPDATE,
  SET_ERROR_OCCURED,
} from "./actionTypes";

import { NETWORK_STATUS } from "../../../const/const";

import { cards } from "../../../data/cardsShape";

export const setCurrentDrugIdAC = (dragId: string) => typedAction(SET_CURRENT_DRUG_ID, { dragId });

export const setNewTimeTableEditorAC = (newCards: TimeTablesCardType[]) =>
  typedAction(SET_NEW_TIME_TABLE_EDITOR_CARDS, { newCards });

export const updateTimeTableEditorCardsAC = (
  updatedCard: { lessonStart: string; lessonEnd: string; student: string },
  boxId: string
) => typedAction(UPDATE_TIME_TABLE_EDITOR_CARDS, { updatedCard, boxId });

export const getChosenDateAC = (chosenDate: string) => typedAction(GET_CHOSEN_DATE, { chosenDate });

export const getCardToUpdatedAC = (cardId: string) => typedAction(GET_CARD_TO_UPDATE, { cardId });

export const loadingTimetableAC = (isLoading: boolean) => typedAction(LOADING_TIME_TABLE, { isLoading });

export const setCardsIdToUpdatedAC = (id: string) => typedAction(SET_CARDS_ID_TO_UPDATE, { id });

export const setErrorOccuredAC = (errorOccured: boolean) => typedAction(SET_ERROR_OCCURED, { errorOccured });

export const setNewTimetableAC = () => async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
  try {
    dispatch(setErrorOccuredAC(false));
    dispatch(loadingTimetableAC(true));

    const newTimetableData = {
      cards: getState().timeTableEditorReducer.timeTablesCards,
      date: getState().timeTableEditorReducer.date,
    };

    await newTimetable(newTimetableData);

    dispatch(loadingTimetableAC(false));
  } catch (error) {
    console.log(error);
    dispatch(loadingTimetableAC(false));
    dispatch(setErrorOccuredAC(true));
  }
};

export const fetchTimetableAC = (chosenDate?: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setErrorOccuredAC(false));
    dispatch(loadingTimetableAC(true));

    const response = await fetchTimetable();

    if (response.status === NETWORK_STATUS.OK) {
      const filteredCards = response.data.filter((d: { date: string }) => d.date === chosenDate);

      if (filteredCards.length !== 0) {
        dispatch(setNewTimeTableEditorAC(filteredCards[0].cards));
        dispatch(setCardsIdToUpdatedAC(filteredCards[0]._id));
      } else {
        dispatch(setNewTimeTableEditorAC(cards));
        dispatch(setCardsIdToUpdatedAC(""));
      }
    }

    dispatch(loadingTimetableAC(false));
  } catch (error) {
    console.log(error);
    dispatch(loadingTimetableAC(false));
    dispatch(setErrorOccuredAC(true));
  }
};

export const updateTimetableAC = () => async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
  try {
    dispatch(setErrorOccuredAC(false));
    dispatch(loadingTimetableAC(true));

    const updatedTimetableData = {
      cards: getState().timeTableEditorReducer.timeTablesCards,
      date: getState().timeTableEditorReducer.date,
    };
    const cardsIdToUpdate = getState().timeTableEditorReducer.cardsIdToUpdate;

    await updateTimetable(cardsIdToUpdate, updatedTimetableData);

    dispatch(loadingTimetableAC(false));
  } catch (error) {
    console.log(error);
    dispatch(loadingTimetableAC(false));
    dispatch(setErrorOccuredAC(true));
  }
};

export type ActionTypes = ReturnType<
  | typeof setCurrentDrugIdAC
  | typeof setNewTimeTableEditorAC
  | typeof updateTimeTableEditorCardsAC
  | typeof getChosenDateAC
  | typeof getCardToUpdatedAC
  | typeof loadingTimetableAC
  | typeof setCardsIdToUpdatedAC
  | typeof setErrorOccuredAC
>;
