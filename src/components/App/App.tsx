import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Header from "../Header/Header";
import StartPage from "./../../pages/StartPage/StartPage";
import FormPage from "../../pages/FormPage/FormPage";
import AccountPage from "./../../pages/AccountPage/AccountPage";
import Toast from "./../common/UI/Toast/Toast";

const App = (): React.ReactElement => {
  return (
    <>
      <Toast />
      <Switch>
        <Redirect exact path="/" to="start-page">
          <StartPage />
        </Redirect>
        <Route exact path="/start-page">
          <StartPage />
        </Route>
        <Route exact path="/login">
          <FormPage />
        </Route>
        <Route exact path="/signin">
          <FormPage />
        </Route>
        <Route exact path="/account">
          <Header />
          <AccountPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
