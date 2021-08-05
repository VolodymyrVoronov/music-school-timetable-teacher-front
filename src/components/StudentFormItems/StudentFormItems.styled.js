import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "../../styles/spacer";

const StudentFormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  width: 100%;
  height: 536px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.primaryOpacity01};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primaryOpacity05};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primaryOpacity07};
  }
`;

export { StudentFormItemsContainer };
