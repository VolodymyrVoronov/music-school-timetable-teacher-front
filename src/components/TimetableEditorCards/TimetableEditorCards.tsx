import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TimeTablesCardType } from "../../store/reducers/timeTableEditorReducer/timeTableEditorReducer";
import { getStudents } from "../../store/reducers/studentsEditorReducer/actions";

import { RootState } from "../../store/store";

import { setCurrentDrugIdAC, setNewTimeTableEditorAC } from "./../../store/reducers/timeTableEditorReducer/actions";

import TimetableEditorCard from "./../TimetableEditorCard/TimetableEditorCard";

import { TimetableEditorCardsContainer } from "./TimetableEditorCards.styled";

const TimetableEditorCards = (): React.ReactElement => {
  const dispatch = useDispatch();

  const { timeTablesCards, dragId } = useSelector((state: RootState) => state.timeTableEditorReducer);

  const { students } = useSelector((state: RootState) => state.studentsEditorReducer);

  // console.log(students);

  React.useEffect(() => {
    dispatch(getStudents());
  }, []);

  // console.log(dragId);
  // console.log(timeTablesCards);

  const onCardDrag = (e: { id: string; order: number; currentTarget: { id: string } }) => {
    console.log(e.currentTarget.id);

    dispatch(setCurrentDrugIdAC(e.currentTarget.id));
  };

  const onCardDrop = (e: { id: string; order: number; currentTarget: { id: string } }) => {
    const dragBox = timeTablesCards.find((box) => box.id === dragId) as TimeTablesCardType;
    const dropBox = timeTablesCards.find((box) => box.id === e.currentTarget.id) as TimeTablesCardType;

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;
    const newBoxState = timeTablesCards.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === e.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });
    dispatch(setNewTimeTableEditorAC(newBoxState));
  };

  return (
    <TimetableEditorCardsContainer>
      {timeTablesCards
        .sort((a, b) => a.order - b.order)
        .map((card) => {
          const { id, order, data } = card;

          return (
            <TimetableEditorCard
              key={id}
              boxNumber={id}
              data={data}
              students={students}
              cardsOrderNumber={order}
              onCardDrag={onCardDrag}
              onCardDrop={onCardDrop}
            />
          );
        })}
    </TimetableEditorCardsContainer>
  );
};

export default TimetableEditorCards;
