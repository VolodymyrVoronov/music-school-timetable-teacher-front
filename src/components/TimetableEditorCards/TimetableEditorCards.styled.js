import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const TimetableEditorCardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${s24};
`;

export { TimetableEditorCardsContainer };
