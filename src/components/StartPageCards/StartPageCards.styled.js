import styled from "styled-components";

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

const StartPageCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 1000px;

  margin: auto;
  margin-top: ${s160};
`;

export { StartPageCardsContainer };
