import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

import {
  s4,
  s8,
  s16,
  s20,
  s24,
  s32,
  s48,
  s64,
  s96,
  s160,
} from "./../../styles/spacer";

const StartPageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  min-height: 450px;

  padding: ${s32};

  background-color: ${colors.white};
`;

const StartPageCardImage = styled.img`
  display: flex;

  width: 100%;

  margin-top: auto;
`;

const StartPageCardButton = styled.div`
  display: flex;

  margin: ${s48} 0 0 0;
`;

export { StartPageCardContainer, StartPageCardImage, StartPageCardButton };
