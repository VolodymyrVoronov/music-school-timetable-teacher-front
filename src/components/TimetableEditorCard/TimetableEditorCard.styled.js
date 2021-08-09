import styled, { css } from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const TimetableEditorCardContainer = styled.div`
  display: flex;

  /* margin: ${s4} 0; */
  padding: ${s20} ${s8};

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

export { TimetableEditorCardContainer };
