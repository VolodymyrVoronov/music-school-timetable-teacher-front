import React, { Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TimeTablesCardType } from "../../store/reducers/timeTableEditorReducer/timeTableEditorReducer";
import { getStudents } from "../../store/reducers/studentsEditorReducer/actions";

import { RootState } from "../../store/store";

import { setCurrentDrugIdAC, setNewTimeTableEditorAC } from "./../../store/reducers/timeTableEditorReducer/actions";

import TimetableEditorCard from "./../TimetableEditorCard/TimetableEditorCard";
import LoaderSpinner from "../common/UI/LoaderSpinner/LoaderSpinner";

import { TimetableEditorCardsContainer } from "./TimetableEditorCards.styled";

interface TimetableEditorCardsProps {
  setTouched: Dispatch<SetStateAction<boolean>>;
}

const TimetableEditorCards = ({ setTouched }: TimetableEditorCardsProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { timeTablesCards, dragId, isLoading } = useSelector((state: RootState) => state.timeTableEditorReducer);
  const { students } = useSelector((state: RootState) => state.studentsEditorReducer);

  React.useEffect(() => {
    dispatch(getStudents());
  }, []);

  const onCardDrag = (e: { id: string; order: number; currentTarget: { id: string } }) => {
    dispatch(setCurrentDrugIdAC(e.currentTarget.id));
  };

  const onCardDrop = (e: { id: string; order: number; currentTarget: { id: string } }) => {
    const dragBox = timeTablesCards.find((box) => box.cardId === dragId) as TimeTablesCardType;
    const dropBox = timeTablesCards.find((box) => box.cardId === e.currentTarget.id) as TimeTablesCardType;

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;
    const newBoxState = timeTablesCards.map((box) => {
      if (box.cardId === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.cardId === e.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    dispatch(setNewTimeTableEditorAC(newBoxState));
    setTouched(true);
  };

  return (
    <>
      {isLoading ? (
        <LoaderSpinner mt="50px" />
      ) : (
        <TimetableEditorCardsContainer>
          {timeTablesCards
            .sort((a, b) => a.order - b.order)
            .map((card) => {
              const { cardId, order, data } = card;

              return (
                <TimetableEditorCard
                  key={cardId}
                  boxNumber={cardId}
                  data={data}
                  students={students}
                  cardsOrderNumber={order}
                  onCardDrag={onCardDrag}
                  onCardDrop={onCardDrop}
                  setTouched={setTouched}
                />
              );
            })}
        </TimetableEditorCardsContainer>
      )}
    </>
  );
};

export default React.memo(TimetableEditorCards);
