import React, { Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/store";
import {
  getCardToUpdatedAC,
  updateTimeTableEditorCardsAC,
} from "./../../store/reducers/timeTableEditorReducer/actions";

import { IoMdCreate, IoMdCheckmark, IoMdClose } from "react-icons/io";

import {
  TimetableEditorCardContainer,
  TimetableEditorCardNumber,
  TimetableEditorCardTime,
  TimetableEditorCardTimeLabel,
  TimetableEditorCardTimeInput,
  TimetableEditorCardStudentSelect,
  TimetableEditorCardStudentOption,
  TimetableEditorCardButtons,
  TimetableEditorCardButton,
  TimetableEditorCardTimeText,
} from "./TimetableEditorCard.styled";

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
  chosenDate?: string;
  setTouched: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  lessonStart: string;
  lessonEnd: string;
  student: string;
}

const initialFormState = { lessonStart: ``, lessonEnd: ``, student: `` };

const TimetableEditorCard = ({
  boxNumber,
  onCardDrag,
  onCardDrop,
  cardsOrderNumber,
  data,
  students,
  setTouched,
}: TimetableEditorCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { cardToUpdate } = useSelector((state: RootState) => state.timeTableEditorReducer);

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
    dispatch(getCardToUpdatedAC(boxNumber));
  };

  const onSaveButtonClick = () => {
    setEditingMode((editingMode) => !editingMode);
    setTouched(true);
    dispatch(updateTimeTableEditorCardsAC(formData, boxNumber));
  };

  const onCancelButtonClick = () => {
    setEditingMode(() => false);
  };

  const onInputTouch = () => {
    setTouched(true);
  };

  React.useEffect(() => {
    if (cardToUpdate.length !== 0) {
      const { lessonStart, lessonEnd, student } = cardToUpdate[0].data;
      setFormData({ lessonStart, lessonEnd, student });
    }
  }, [cardToUpdate]);

  return (
    <TimetableEditorCardContainer
      draggable
      id={boxNumber}
      onDragOver={(e: any) => e.preventDefault()}
      onDragStart={onCardDrag}
      onDrop={onCardDrop}
    >
      <TimetableEditorCardNumber>{cardsOrderNumber}:</TimetableEditorCardNumber>

      <TimetableEditorCardTime>
        <TimetableEditorCardTimeLabel>С</TimetableEditorCardTimeLabel>

        {editingMode ? (
          <>
            {cardToUpdate.length !== 0 ? (
              <TimetableEditorCardTimeInput
                defaultValue={cardToUpdate[0].data.lessonStart}
                type="time"
                onChange={onFormInputChange}
                onBlur={onInputTouch}
                name="lessonStart"
              />
            ) : (
              <TimetableEditorCardTimeInput
                type="time"
                onBlur={onInputTouch}
                onChange={onFormInputChange}
                name="lessonStart"
              />
            )}
          </>
        ) : (
          <TimetableEditorCardTimeText>
            {data.lessonStart.length !== 0 ? data.lessonStart : `__ : __`}
          </TimetableEditorCardTimeText>
        )}

        <TimetableEditorCardTimeLabel>до</TimetableEditorCardTimeLabel>

        {editingMode ? (
          <>
            {cardToUpdate.length !== 0 ? (
              <TimetableEditorCardTimeInput
                defaultValue={cardToUpdate[0].data.lessonEnd}
                type="time"
                onChange={onFormInputChange}
                onBlur={onInputTouch}
                name="lessonEnd"
              />
            ) : (
              <TimetableEditorCardTimeInput
                type="time"
                onBlur={onInputTouch}
                onChange={onFormInputChange}
                name="lessonEnd"
              />
            )}
          </>
        ) : (
          <TimetableEditorCardTimeText>
            {data.lessonEnd.length !== 0 ? data.lessonEnd : `__ : __`}
          </TimetableEditorCardTimeText>
        )}

        {editingMode ? (
          <>
            <TimetableEditorCardStudentSelect
              name="student"
              onBlur={onInputTouch}
              onChange={onFormInputChange}
              defaultValue={"DEFAULT"}
            >
              {editingMode && cardToUpdate[0].data.student.length !== 0 && (
                <TimetableEditorCardStudentOption value="DEFAULT" disabled>
                  {cardToUpdate[0].data.student}
                </TimetableEditorCardStudentOption>
              )}

              <TimetableEditorCardStudentOption />
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
          <TimetableEditorCardTimeText>
            {data.student.length !== 0 ? data.student : `________________`}
          </TimetableEditorCardTimeText>
        )}
      </TimetableEditorCardTime>
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
    </TimetableEditorCardContainer>
  );
};

export default TimetableEditorCard;
