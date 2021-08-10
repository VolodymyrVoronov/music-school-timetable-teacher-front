import React from "react";

import { IoMdCreate, IoMdCheckmark, IoMdClose } from "react-icons/io";

import { TimetableEditorCardContainer, TimetableEditorCardNumber, TimetableEditorCardTime, TimetableEditorCardTimeLabel, TimetableEditorCardTimeInput, TimetableEditorCardStudentSelect, TimetableEditorCardStudentOption, TimetableEditorCardButtons, TimetableEditorCardButton, TimetableEditorCardTimeText } from "./TimetableEditorCard.styled";

interface StundentType {
  firstName: string;
  secondName: string;
  studentClass: string;
  teacher: string;
  _id: string;
}

interface TimetableEditorCardProps {
  boxNumber: string;
  onCardDrag: (e: { id: string; order: number; currentTarget: { id: string } }) => void;
  onCardDrop: (e: { id: string; order: number; currentTarget: { id: string } }) => void;
  cardsOrderNumber: number;
  data: { lessonEnd: string; lessonStart: string; student: string };
  students: StundentType[];
}

interface FormData {
  lessonStart: string;
  lessonEnd: string;
  student: string;
}

const initialFormState = { lessonStart: ``, lessonEnd: ``, student: `` };

const TimetableEditorCard = ({ boxNumber, onCardDrag, onCardDrop, cardsOrderNumber, data, students }: TimetableEditorCardProps): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);
  const [editingMode, setEditingMode] = React.useState(false);

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const onEditButtonClick = () => {
    setEditingMode((editingMode) => !editingMode);
  };

  const onSaveButtonClick = () => {
    setEditingMode((editingMode) => !editingMode);
  };

  const onCancelButtonClick = () => {
    setEditingMode(() => false);
  };

  return (
    <TimetableEditorCardContainer draggable id={boxNumber} onDragOver={(e: any) => e.preventDefault()} onDragStart={onCardDrag} onDrop={onCardDrop}>
      <TimetableEditorCardNumber>{cardsOrderNumber}:</TimetableEditorCardNumber>

      <TimetableEditorCardTime>
        <TimetableEditorCardTimeLabel>С</TimetableEditorCardTimeLabel>

        {editingMode ? <TimetableEditorCardTimeInput type="time" onChange={onFormInputChange} name="lessonStart" /> : <TimetableEditorCardTimeText>{data.lessonStart.length !== 0 ? data.lessonStart : `__ : __`}</TimetableEditorCardTimeText>}

        <TimetableEditorCardTimeLabel>до</TimetableEditorCardTimeLabel>
        {editingMode ? <TimetableEditorCardTimeInput type="time" onChange={onFormInputChange} name="lessonEnd" /> : <TimetableEditorCardTimeText>{data.lessonEnd.length !== 0 ? data.lessonEnd : `__ : __`}</TimetableEditorCardTimeText>}

        {editingMode ? (
          <>
            <TimetableEditorCardStudentSelect name="student" onChange={onFormInputChange}>
              {/* <TimetableEditorCardStudentOption value={data.student}>{data.student}</TimetableEditorCardStudentOption> */}

              {students.map((student: StundentType) => {
                const { _id, firstName, secondName, studentClass } = student;

                return (
                  <TimetableEditorCardStudentOption key={_id} value={`${firstName} ${secondName} ${studentClass}`}>
                    {firstName} {secondName} {studentClass}
                  </TimetableEditorCardStudentOption>
                );
              })}
            </TimetableEditorCardStudentSelect>
          </>
        ) : (
          <TimetableEditorCardTimeText>{data.student.length !== 0 ? data.student : `________________`}</TimetableEditorCardTimeText>
        )}

        <TimetableEditorCardButtons>
          {editingMode ? (
            <>
              <TimetableEditorCardButton onClick={() => onSaveButtonClick()}>
                <IoMdCheckmark />
              </TimetableEditorCardButton>
              <TimetableEditorCardButton onClick={() => onCancelButtonClick()}>
                <IoMdClose />
              </TimetableEditorCardButton>
            </>
          ) : (
            <TimetableEditorCardButton onClick={() => onEditButtonClick()}>
              <IoMdCreate />
            </TimetableEditorCardButton>
          )}
        </TimetableEditorCardButtons>
      </TimetableEditorCardTime>
    </TimetableEditorCardContainer>
  );
};

export default TimetableEditorCard;
