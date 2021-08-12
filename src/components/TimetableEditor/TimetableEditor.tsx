import React from "react";
import { useHistory, useLocation } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

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

  let chosenDate;

  if (location.state) chosenDate = (location.state as RouteStateProps).chosenDate || undefined;

  const onSaveButtonClick = () => {};

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
              <Button disabled text="Сохранить" primary mr="5px" />
              <Button onClick={onCancelButtonClick} text="Отмена" primary ml="5px" />
            </TimetableEditorButtons>
          </TimetableEditorHeader>
        </Slide>

        <Slide top>
          <TimetableEditorCards />
        </Slide>
      </TimetableEditorContainer>
    </Slide>
  );
};

export default TimetableEditor;
