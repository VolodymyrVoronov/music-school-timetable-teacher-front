import styled from "styled-components";

import { s64, s96 } from "./../../styles/spacer";

const StartPageCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 1000px;

  margin: auto;
  margin-top: ${s96};
  margin-bottom: ${s64};
`;

export { StartPageCardsContainer };
