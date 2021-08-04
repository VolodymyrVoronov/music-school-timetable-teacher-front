import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toast";

import { RootState } from "../../../../store/store";

import { ToastBox } from "./Toast.styled";

import { colors } from "../../../../styles/colorPalette";

const Toast = (): React.ReactElement => {
  const { isAuthorizingSuccessed, isAuthorizingFailed } = useSelector((state: RootState) => state.authReducer);

  const portalContainer = document.getElementById("toast-root") as HTMLElement;

  const showAuthSuccess = () =>
    toast("Вы успешно прошли аутентификацию.😃", {
      backgroundColor: `${colors.primary}`,
      color: `${colors.success}`,
    });
  const showAuthError = () =>
    toast("Что-то пошло не так. 😥 Проверьте введёные данные и попробуйте снова.", {
      backgroundColor: `${colors.primary}`,
      color: `${colors.fail}`,
    });

  React.useEffect(() => {
    if (isAuthorizingSuccessed) {
      showAuthSuccess();
    }

    if (isAuthorizingFailed) {
      showAuthError();
    }
  }, [isAuthorizingFailed, isAuthorizingSuccessed]);

  return ReactDOM.createPortal(
    <ToastBox>
      <ToastContainer position="bottom-center" delay={5000} />
    </ToastBox>,
    portalContainer
  );
};

export default Toast;
