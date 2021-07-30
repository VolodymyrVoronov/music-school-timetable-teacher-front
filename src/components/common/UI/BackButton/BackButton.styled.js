import styled, { css } from "styled-components";

import { colors } from "./../../../../styles/colorPalette";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../../../styles/spacer";

const BackButtonContainer = styled.div`
  position: absolute;
  display: block;

  top: ${s20};
  left: ${s20};

  height: 50px;
  width: 50px;

  margin: 0;
  padding: 0;

  font-size: 50px;
  line-height: 40px;

  border-radius: 50%;

  a {
    display: inline-block;

    color: ${colors.primary};

    list-style: none;
    text-decoration: none;
  }
`;

export { BackButtonContainer };
