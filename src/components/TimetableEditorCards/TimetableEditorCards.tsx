import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TimeTablesCardType } from "../../store/reducers/timeTableEditorReducer/timeTableEditorReducer";

import { RootState } from "../../store/store";

import { setCurrentDrugIdAC, setNewTimeTableEditorAC } from "./../../store/reducers/timeTableEditorReducer/actions";

import TimetableEditorCard from "./../TimetableEditorCard/TimetableEditorCard";

const TimetableEditorCards = (): React.ReactElement => {
  const dispatch = useDispatch();

  const { timeTablesCards, dragId } = useSelector((state: RootState) => state.timeTableEditorReducer);

  console.log(dragId);
  console.log(timeTablesCards);

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
    console.log(newBoxState);
    dispatch(setNewTimeTableEditorAC(newBoxState));
  };

  return (
    <>
      {timeTablesCards
        .sort((a, b) => a.order - b.order)
        .map((card) => {
          const { id, order, data } = card;

          return <TimetableEditorCard key={id} boxNumber={id} data={data} cardsOrderNumber={order} onCardDrag={onCardDrag} onCardDrop={onCardDrop} />;
        })}
    </>
  );
};

export default TimetableEditorCards;
