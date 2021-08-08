import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Header from "../Header/Header";
import StartPage from "./../../pages/StartPage/StartPage";
import FormPage from "../../pages/FormPage/FormPage";
import AccountPage from "./../../pages/AccountPage/AccountPage";
import StudentsEditorPage from "../../pages/StudentsEditor/StudentEditorPage";
import CalendarPage from "./../../pages/CalendarPage/CalendarPage";
import NoMatchPage from "./../../pages/NoMatchPage/NoMatchPage";

import Toast from "./../common/UI/Toast/Toast";

const App = (): React.ReactElement => {
  const token = JSON.parse(localStorage.getItem("profile") || "{}").token;
  console.log(token);

  return (
    <>
      <Toast />
      <Switch>
        {token ? (
          <Redirect exact path="/" to="account">
            <StartPage />
          </Redirect>
        ) : (
          <Redirect exact path="/" to="start-page">
            <StartPage />
          </Redirect>
        )}

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

        <Route exact path="/calendar">
          <Header />
          <CalendarPage />
        </Route>

        <Route exact path="/timetable-editor">
          <Header />
          <p>timetable-editor</p>
        </Route>

        <Route exact path="/students-editor">
          <Header />
          <StudentsEditorPage />
        </Route>

        <Route path="*">
          <Header />
          <NoMatchPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
