import styled from "styled-components";

import { colors } from "./../../../../styles/colorPalette";

import { s20 } from "./../../../../styles/spacer";

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
