import styled from "styled-components";

import { colors } from "../../../../styles/colorPalette";

import { s16 } from "./../../../../styles/spacer";

const ToastBox = styled.div`
  .toast {
    font-size: ${s16};

    border: 2px solid ${colors.white};
  }

  .toast div.icon {
    display: none;
  }
`;

export { ToastBox };
