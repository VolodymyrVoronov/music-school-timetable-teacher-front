import React from "react";

import { TimetableEditorCardContainer } from "./TimetableEditorCard.styled";

const TimetableEditorCard = ({ boxNumber, onCardDrag, onCardDrop, cardsOrderNumber, onCardDragEnd }: any): React.ReactElement => {
  return (
    <TimetableEditorCardContainer draggable id={boxNumber} onDragOver={(e: any) => e.preventDefault()} onDragStart={onCardDrag} onDrop={onCardDrop} onDragEnd={onCardDragEnd}>
      {cardsOrderNumber} {boxNumber}
    </TimetableEditorCardContainer>
  );
};

export default TimetableEditorCard;
