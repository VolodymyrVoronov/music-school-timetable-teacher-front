import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s24, s32, s96 } from "./../../styles/spacer";

const TimetableEditorContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
  min-height: 666px;

  margin: auto;
  margin-top: ${s96};
  margin-bottom: ${s32};
  padding: ${s24};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const TimetableEditorHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimetableEditorTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;

  color: ${colors.primary};
`;

const TimetableEditorButtons = styled.div`
  display: flex;

  width: 500px;

  margin-left: auto;
`;

export { TimetableEditorContainer, TimetableEditorHeader, TimetableEditorTitle, TimetableEditorButtons };
