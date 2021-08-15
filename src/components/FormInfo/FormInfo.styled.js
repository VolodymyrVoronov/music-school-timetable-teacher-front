import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

import { s20 } from "./../../styles/spacer";

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
