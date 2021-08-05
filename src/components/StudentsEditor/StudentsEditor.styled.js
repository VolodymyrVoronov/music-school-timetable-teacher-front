import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "../../styles/spacer";

const StudentsEditorContainer = styled.div`
  display: flex;

  width: 1000px;
  min-height: 666px;

  margin: auto;
  margin-top: ${s160};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const StudentsEditorContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s64} 0;
`;

const StudentsEditorContainerRight = styled.form`
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

const StudentsEditorContainerRightLabel = styled.label`
  display: flex;
  justify-content: flex-start;

  width: 100%;

  padding: ${s24} 0 ${s4} 0;

  font-size: 22px;
  line-height: 28px;
  font-weight: 700;

  color: ${colors.white};
`;

const StudentsEditorContainerRightSelectInput = styled.select`
  display: flex;

  width: 100%;

  padding: ${s16} ${s16} ${s16} ${s8};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.black};

  border: none;
`;

const StudentsEditorContainerRightSelectOption = styled.option`
  display: flex;
`;

const StudentsEditorContainerRightButtonsBlock = styled.div`
  display: flex;

  margin-top: ${s32};
`;

export { StudentsEditorContainer, StudentsEditorContainerLeft, StudentsEditorContainerRight, StudentsEditorContainerRightLabel, StudentsEditorContainerRightSelectInput, StudentsEditorContainerRightSelectOption, StudentsEditorContainerRightButtonsBlock };
