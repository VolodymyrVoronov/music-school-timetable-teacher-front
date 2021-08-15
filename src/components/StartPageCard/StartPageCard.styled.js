import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s32, s48 } from "./../../styles/spacer";

const StartPageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  min-height: 450px;

  padding: ${s32};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const StartPageCardImage = styled.img`
  display: flex;

  width: 100%;

  margin-top: auto;
`;

const StartPageCardButton = styled.div`
  display: flex;

  width: 100%;

  margin: ${s48} 0 0 0;

  div {
    width: 100%;
  }
`;

export { StartPageCardContainer, StartPageCardImage, StartPageCardButton };
