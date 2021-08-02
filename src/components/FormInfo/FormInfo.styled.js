import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const FormInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInfoText = styled.p`
  display: block;

  margin-bottom: ${s20};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.white};

  span {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export { FormInfoContainer, FormInfoText };
