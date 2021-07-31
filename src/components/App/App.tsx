import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import StartPage from "./../../pages/StartPage/StartPage";
import AuthForm from "./../../pages/AuthForm/AuthForm";

const App = (): React.ReactElement => {
  return (
    <>
      <Switch>
        <Redirect exact path="/" to="start-page">
          <StartPage />
        </Redirect>
        <Route exact path="/start-page">
          <StartPage />
        </Route>
        <Route exact path="/login">
          <AuthForm />
        </Route>
        <Route exact path="/signin">
          <AuthForm />
        </Route>
      </Switch>
    </>
  );
};

export default App;
