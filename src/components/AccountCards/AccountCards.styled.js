import styled from "styled-components";

import { s64, s160 } from "./../../styles/spacer";

const AccountCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 1000px;

  margin: auto;
  margin-top: ${s160};
  margin-bottom: ${s64};
`;

export { AccountCardsContainer };
