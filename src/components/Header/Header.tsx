import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";
import { logoutAC, setUserNameAC } from "../../store/reducers/authReducer/actions";

import Button from "../common/UI/Button/Button";

import { HeaderContainer, HeaderUserTitle, HeaderButtonContainer } from "./Header.styled";

interface LocalStorage {
  result: { firstName: string; secondName: string };
  token?: string;
}

const Header = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { authData, userFullName } = useSelector((state: RootState) => state.authReducer);

  const [user, setUser] = React.useState<LocalStorage | null>(JSON.parse(localStorage.getItem("profile") || "{}"));

  const portalContainer = document.getElementById("header-root") as HTMLElement;

  React.useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: { exp: number } = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logoutAC());
        setUser(null);
        history.replace("/start-page");
      }
    }

    if (Object.getOwnPropertyNames(user).length !== 0) {
      setUser(JSON.parse(localStorage.getItem("profile") || "{}"));
      dispatch(setUserNameAC(user?.result.firstName, user?.result.secondName));
    }

    if (Object.getOwnPropertyNames(user).length === 0) {
      setUser(null);
      history.replace("/start-page");
    }
  }, []);

  const onLogoutClick = () => {
    dispatch(logoutAC());
    setUser(null);
    dispatch(setUserNameAC("", ""));
    history.replace("/start-page");
  };

  return ReactDOM.createPortal(
    <HeaderContainer>
      <Slide top>
        <HeaderUserTitle>
          {authData.token === undefined && user?.token === undefined ? null : userFullName}
        </HeaderUserTitle>
        <HeaderButtonContainer>
          <Button onClick={onLogoutClick} text="Выход" primary={false} pt="8px" pb="8px" />
        </HeaderButtonContainer>
      </Slide>
    </HeaderContainer>,
    portalContainer
  );
};

export default Header;
