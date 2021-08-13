import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { setNewTimetable } from "../../store/reducers/timeTableEditorReducer/actions";

import TimetableEditorCards from "./../TimetableEditorCards/TimetableEditorCards";
import Button from "../common/UI/Button/Button";

import {
  TimetableEditorContainer,
  TimetableEditorHeader,
  TimetableEditorTitle,
  TimetableEditorButtons,
} from "./TimetableEditor.styled";

interface RouteStateProps {
  chosenDate?: string;
}

const TimetableEditor = (): React.ReactElement => {
  const history = useHistory();
  const location = useLocation();

  const disptach = useDispatch();

  const [touched, setTouched] = React.useState(false);

  let chosenDate;

  if (location.state) chosenDate = (location.state as RouteStateProps).chosenDate || undefined;

  const onSaveButtonClick = () => {
    setTouched(false);
    disptach(setNewTimetable());
  };

  const onCancelButtonClick = () => {
    history.replace("/calendar");
  };

  return (
    <Slide top>
      <TimetableEditorContainer>
        <Slide top>
          <TimetableEditorHeader>
            <TimetableEditorTitle>{chosenDate ? "Дата: " + chosenDate : "Дата не выбрана!"}</TimetableEditorTitle>
            <TimetableEditorButtons>
              <Button disabled={!touched} onClick={onSaveButtonClick} text="Сохранить" primary mr="5px" />
              <Button onClick={onCancelButtonClick} text="Назад" primary ml="5px" />
            </TimetableEditorButtons>
          </TimetableEditorHeader>
        </Slide>

        <Slide top>
          <TimetableEditorCards setTouched={setTouched} />
        </Slide>
      </TimetableEditorContainer>
    </Slide>
  );
};

export default TimetableEditor;
