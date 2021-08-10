import React from "react";

import { TimetableEditorCardContainer, TimetableEditorCardNumber, TimetableEditorCardTime, TimetableEditorCardTimeLabel, TimetableEditorCardTimeInput, TimetableEditorCardStudentSelect, TimetableEditorCardStudentOption } from "./TimetableEditorCard.styled";

interface TimetableEditorCardProps {
  boxNumber: string;
  onCardDrag: (e: { id: string; order: number; currentTarget: { id: string } }) => void;
  onCardDrop: (e: { id: string; order: number; currentTarget: { id: string } }) => void;
  cardsOrderNumber: number;
  data: { lessonEnd: string; lessonStart: string; student: string };
  students: any;
}

interface FormData {
  lessonStart: string;
  lessonEnd: string;
  student: string;
}

const initialFormState = { lessonStart: ``, lessonEnd: ``, student: `` };

const TimetableEditorCard = ({ boxNumber, onCardDrag, onCardDrop, cardsOrderNumber, data, students }: TimetableEditorCardProps): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  return (
    <TimetableEditorCardContainer draggable id={boxNumber} onDragOver={(e: any) => e.preventDefault()} onDragStart={onCardDrag} onDrop={onCardDrop}>
      <TimetableEditorCardNumber>{cardsOrderNumber}:</TimetableEditorCardNumber>

      <TimetableEditorCardTime>
        <TimetableEditorCardTimeLabel>С</TimetableEditorCardTimeLabel>
        <TimetableEditorCardTimeInput type="time" onChange={onFormInputChange} name="lessonStart" />
        <TimetableEditorCardTimeLabel>до</TimetableEditorCardTimeLabel>
        <TimetableEditorCardTimeInput type="time" onChange={onFormInputChange} name="lessonEnd" />

        <TimetableEditorCardStudentSelect name="student" onChange={onFormInputChange}>
          {/* <TimetableEditorCardStudentOption value={data.student}>{data.student}</TimetableEditorCardStudentOption> */}

          {students.map((student: any) => {
            const { firstName, secondName, studentClass } = student;

            return (
              <TimetableEditorCardStudentOption>
                {firstName} {secondName} {studentClass}
              </TimetableEditorCardStudentOption>
            );
          })}
        </TimetableEditorCardStudentSelect>
      </TimetableEditorCardTime>
    </TimetableEditorCardContainer>
  );
};

export default TimetableEditorCard;
