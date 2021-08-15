import styled, { css } from "styled-components";

import { colors } from "../../../../styles/colorPalette";

import { s16, s24, s32 } from "./../../../../styles/spacer";

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};

  padding: ${s16} 0;

  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}

  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `}

  font-family: inherit;
  font-size: ${s24};
  line-height: ${s32};
  font-weight: 500;
  color: ${(props) => (props.isPrimary ? `${colors.white}` : `${colors.primary}`)};

  background-color: ${(props) => (props.isPrimary ? `${colors.primary}` : `${colors.white}`)};

  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export { ButtonContainer };
