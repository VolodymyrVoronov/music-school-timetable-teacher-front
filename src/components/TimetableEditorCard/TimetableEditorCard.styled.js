import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

import { s4, s8, s16, s20 } from "./../../styles/spacer";

const TimetableEditorCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${s16} ${s8};

  border-bottom: 2px solid ${colors.primary};

  transition: 0.25s ease;

  &:hover {
    cursor: grab;
    transition: 0.25s ease;

    background-color: ${colors.primaryOpacity01};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TimetableEditorCardNumber = styled.p`
  display: flex;

  margin-right: ${s20};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableEditorCardTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TimetableEditorCardTimeLabel = styled.label`
  display: flex;

  margin: 0 ${s8};

  font-size: 18px;
  line-height: 24px;
  font-weight: 700;

  color: ${colors.primary};
`;

const TimetableEditorCardTimeInput = styled.input`
  display: flex;

  margin: 0 ${s8};
  padding: 0 ${s8};

  font-size: 18px;
  line-height: 24px;
  font-weight: 700;

  color: ${colors.primary};
`;

const TimetableEditorCardStudentSelect = styled.select`
  display: flex;

  margin: 0 ${s8};
  padding: ${s4} ${s8};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableEditorCardStudentOption = styled.option`
  display: flex;
`;

const TimetableEditorCardButtons = styled.div`
  display: flex;

  margin-left: auto;
`;

const TimetableEditorCardButton = styled.span`
  display: flex;

  margin-left: ${s16};

  font-size: 32px;
  line-height: 32px;
  font-weight: 700;

  color: ${colors.primaryOpacity07};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${colors.primary};
  }
`;

const TimetableEditorCardTimeText = styled.p`
  display: flex;

  margin: 0 ${s16};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};
`;

export {
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
};
