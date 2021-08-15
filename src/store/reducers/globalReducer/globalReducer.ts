import { AnyAction, Reducer } from "redux";

import loginImage01 from "./../../../assets/login-vector.svg";
import joinImage01 from "./../../../assets/join-vector.svg";

import timeTableEditor01 from "./../../../assets/events-vector.svg";
import studentsEditor01 from "./../../../assets/add-user-vector.svg";

export type GlobalReducerStateType = {
  startPageCardsSettings: { id: number; image: string; text: string; path: string; type: string }[];

  accountCardsSettings: { id: number; image: string; text: string; path: string }[];
};

const initialState = {
  startPageCardsSettings: [
    { id: 1, image: loginImage01, text: "Вход", path: "login", type: "login" },
    { id: 2, image: joinImage01, text: "Регистрация", path: "signin", type: "signin" },
  ],

  accountCardsSettings: [
    { id: 1, image: timeTableEditor01, text: "Редактировать расписание", path: "calendar" },
    { id: 2, image: studentsEditor01, text: "Добавить/удалить ученика", path: "students-editor" },
  ],
};

const globalReducer: Reducer<GlobalReducerStateType> = (
  state = initialState,
  action: AnyAction
): GlobalReducerStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
