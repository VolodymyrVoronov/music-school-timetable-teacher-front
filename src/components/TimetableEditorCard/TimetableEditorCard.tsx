import React from "react";

const TimetableEditorCard = ({ boxNumber, onCardDrag, onCardDrop }: any): React.ReactElement => {
  return (
    <div
      draggable={true}
      id={boxNumber}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={onCardDrag}
      onDrop={onCardDrop}
      style={{
        // backgroundColor: boxColor,
        border: "1px solid",
        // borderColor: boxColor,
        borderRadius: "5px",
        color: "#000",
        width: "100%",
        height: "100px",
      }}
    >
      {boxNumber}
    </div>
  );
};

export default TimetableEditorCard;
