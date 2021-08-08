import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  min-height: 500px;

  margin: auto;
  margin-top: ${s160};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

export { CalendarContainer };
