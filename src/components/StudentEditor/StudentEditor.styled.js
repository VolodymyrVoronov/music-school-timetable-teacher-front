import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const StudentEditorContainer = styled.div`
  display: flex;

  width: 1000px;
  min-height: 666px;

  margin: auto;
  margin-top: ${s96};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const StudentEditorContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s64} 0;
`;

const StudentEditorContainerRight = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s20} ${s64} ${s32};

  background-color: ${colors.primary};

  div {
    width: 100%;
  }
`;

export { StudentEditorContainer, StudentEditorContainerLeft, StudentEditorContainerRight };
