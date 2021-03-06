import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toast";

import { RootState } from "../../../../store/store";

import { ToastBox } from "./Toast.styled";

import { colors } from "../../../../styles/colorPalette";

const Toast = (): React.ReactElement => {
  const { isAuthorizingSucceed, isAuthorizingFailed } = useSelector((state: RootState) => state.authReducer);

  const { isStudentsActionSucceed, isStudentsActionFailed } = useSelector(
    (state: RootState) => state.studentsEditorReducer
  );

  const { errorOccured } = useSelector((state: RootState) => state.timeTableEditorReducer);

  const token = JSON.parse(localStorage.getItem("profile") || "{}").token;

  const portalContainer = document.getElementById("toast-root") as HTMLElement;

  const showSuccess = (text: string) =>
    toast(text, {
      backgroundColor: `${colors.primary}`,
      color: `${colors.success}`,
    });
  const showError = (text: string) =>
    toast(text, {
      backgroundColor: `${colors.primary}`,
      color: `${colors.fail}`,
    });

  React.useEffect(() => {
    if (isAuthorizingSucceed) {
      showSuccess("Вы успешно вошли в личный кабинет.😃");
    }

    if (isAuthorizingFailed) {
      showError("Что-то пошло не так. 😥 Проверьте введёные данные и попробуйте снова.");
    }

    if (isStudentsActionSucceed && token) {
      showSuccess("Данные упешно обновлены.😃");
    }

    if (isStudentsActionFailed && token) {
      showError("Что-то пошло не так. 🙄 Обновите страницу и попробуйте снова.");
    }

    if (errorOccured && token) {
      showError("Что-то пошло не так. 🙄 Обновите страницу и попробуйте снова.");
    }
  }, [errorOccured, isAuthorizingFailed, isAuthorizingSucceed, isStudentsActionFailed, isStudentsActionSucceed, token]);

  return ReactDOM.createPortal(
    <ToastBox>
      <ToastContainer position="bottom-center" delay={2000} />
    </ToastBox>,
    portalContainer
  );
};

export default Toast;
