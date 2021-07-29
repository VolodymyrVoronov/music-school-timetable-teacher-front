import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import StartPage from "./../../pages/StartPage/StartPage";

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
      </Switch>
    </>
  );
};

export default App;
