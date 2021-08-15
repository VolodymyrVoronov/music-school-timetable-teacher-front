import styled from "styled-components";

import { colors } from "../../../styles/colorPalette";
import { boxShadow } from "../../../styles/globalStylesVariables";

import { s48, s64, s160 } from "../../../styles/spacer";

const NoMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 500px;
  min-height: 250px;

  margin: auto;
  margin-top: ${s160};
  padding: ${s48};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const NoMatchTitle = styled.h2`
  display: flex;
  justify-content: center;

  margin-bottom: ${s64};

  font-size: 32px;
  line-height: 36px;
  font-weight: 400;
  text-align: center;

  color: ${colors.primary};
`;

const NoMatchImage = styled.img`
  display: flex;

  width: 100%;
`;

const NoMatchButtonsBox = styled.div`
  display: flex;

  margin-top: ${s64};
`;

export { NoMatchContainer, NoMatchTitle, NoMatchImage, NoMatchButtonsBox };
