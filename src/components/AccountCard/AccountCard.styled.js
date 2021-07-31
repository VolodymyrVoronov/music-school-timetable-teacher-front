import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const AccountCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  min-height: 500px;

  padding: ${s32};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const AccountCardImage = styled.img`
  display: flex;

  width: 100%;

  margin-top: auto;
`;

const AccountCardButton = styled.div`
  display: flex;

  width: 100%;

  margin: ${s48} 0 0 0;

  div {
    width: 100%;
  }
`;

export { AccountCardContainer, AccountCardImage, AccountCardButton };
