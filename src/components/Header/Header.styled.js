import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;

  width: 100%;

  padding: ${s8} ${s32};

  background-color: ${colors.primary};
`;

const HeaderUserTitle = styled.p`
  display: flex;

  font-size: 22px;
  line-height: 28px;
  font-weight: 700;

  color: ${colors.white};
`;

const HeaderButtonContainer = styled.div`
  display: block;

  width: 150px;
`;

export { HeaderContainer, HeaderUserTitle, HeaderButtonContainer };
