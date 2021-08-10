import styled, { css } from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const TimetableEditorCardContainer = styled.div`
  display: flex;
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

  margin-right: ${s32};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableEditorCardTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimetableEditorCardTimeLabel = styled.label`
  display: flex;

  margin-right: ${s20};

  font-size: 18px;
  line-height: 24px;
  font-weight: 700;

  color: ${colors.primary};
`;

const TimetableEditorCardTimeInput = styled.input`
  display: flex;

  margin-right: ${s20};
  padding: ${s4};

  font-size: 18px;
  line-height: 24px;
  font-weight: 700;

  color: ${colors.primary};
`;

const TimetableEditorCardStudentSelect = styled.select`
  display: flex;

  margin-left: ${s20};
  padding: ${s8};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableEditorCardStudentOption = styled.option`
  display: flex;
`;

export { TimetableEditorCardContainer, TimetableEditorCardNumber, TimetableEditorCardTime, TimetableEditorCardTimeLabel, TimetableEditorCardTimeInput, TimetableEditorCardStudentSelect, TimetableEditorCardStudentOption };
