import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

const StudentFormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  width: 100%;
  height: 536px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.primaryOpacity01};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primaryOpacity05};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primaryOpacity07};
  }
`;

const StudentFormItemsText = styled.p`
  display: flex;
  justify-content: center;

  font-size: 22px;
  line-height: 36px;
  font-weight: 700;

  color: ${colors.primary};
`;

export { StudentFormItemsContainer, StudentFormItemsText };
