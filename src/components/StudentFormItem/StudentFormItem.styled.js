import styled, { css } from "styled-components";

import { colors } from "../../styles/colorPalette";

import { s4, s8 } from "../../styles/spacer";

const StudentFormItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: ${s8} ${s4} 12px 0;

  border-bottom: 2px solid ${colors.blackOpacity03};
`;

const StudentFormItemText = styled.p`
  display: flex;

  ${(props) =>
    props.ml &&
    css`
      margin-left: auto;
    `}

  font-size: 22px;
  line-height: 28px;
  font-weight: 700;

  ${(props) =>
    props.ta &&
    css`
      text-align: center;
    `}

  color: ${colors.black};
`;

const StudentFormItemButtons = styled.div`
  display: flex;
  align-items: center;

  margin-left: ${s4};
`;

const StudentFormItemButton = styled.span`
  display: flex;

  margin-left: ${s8};

  font-size: 28px;
  line-height: 30px;
  font-weight: 700;

  color: ${colors.primaryOpacity07};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${colors.primary};
  }
`;

export { StudentFormItemContainer, StudentFormItemText, StudentFormItemButtons, StudentFormItemButton };
