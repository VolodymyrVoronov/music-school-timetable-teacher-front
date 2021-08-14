import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import {
  setNewTimetableAC,
  fetchTimetableAC,
  updateTimetableAC,
} from "../../store/reducers/timeTableEditorReducer/actions";

import { RootState } from "../../store/store";

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
  const disptach = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [touched, setTouched] = React.useState<boolean>(false);

  const { cardsIdToUpdate } = useSelector((state: RootState) => state.timeTableEditorReducer);

  let chosenDate = ("" as string) || undefined;

  if (location.state) chosenDate = (location.state as RouteStateProps).chosenDate || undefined;

  const onSaveButtonClick = React.useCallback(() => {
    setTouched(false);

    if (cardsIdToUpdate) {
      disptach(updateTimetableAC());
    } else {
      disptach(setNewTimetableAC());
    }
  }, [cardsIdToUpdate, disptach]);

  const onCancelButtonClick = () => {
    history.replace("/calendar");
  };

  React.useEffect(() => {
    disptach(fetchTimetableAC(chosenDate));
  }, [chosenDate, disptach]);

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
