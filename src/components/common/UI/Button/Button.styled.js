import styled, { css } from "styled-components";

import { colors } from "../../../../styles/colorPalette";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../../../styles/spacer";

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;

  width: 300px;

  padding: ${s16} 0;

  font-family: inherit;
  font-size: ${s24};
  line-height: ${s32};
  font-weight: 500;
  color: ${(props) => (props.isPrimary ? `${colors.white}` : `${colors.black}`)};

  background-color: ${(props) => (props.isPrimary ? `${colors.primary}` : `${colors.white}`)};

  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export { ButtonContainer };
