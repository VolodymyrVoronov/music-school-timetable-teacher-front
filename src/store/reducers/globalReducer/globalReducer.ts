import { ActionTypes, Actions } from "./actions";

import loginImage01 from "./../../../assets/login-vector.svg";
import joinImage01 from "./../../../assets/join-vector.svg";
import { Reducer } from "redux";

export type GlobalReducerStateType = {
  cardsSettings: { id: number; image: string; text: string; path: string; type: string }[];
};

const initialState = {
  cardsSettings: [
    { id: 1, image: loginImage01, text: "Вход", path: "login", type: "login" },
    { id: 2, image: joinImage01, text: "Регистрация", path: "signin", type: "signin" },
  ],
};

const globalReducer: Reducer<GlobalReducerStateType> = (state = initialState, action: ActionTypes): GlobalReducerStateType => {
  switch (action.type) {
    case Actions.GET_START_PAGE_CARDS_INFO: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default globalReducer;
