import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

import { s4, s8, s24 } from "./../../styles/spacer";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-top: ${s24};
`;

const InputLabel = styled.label`
  display: flex;

  padding-bottom: ${s4};

  font-size: 22px;
  line-height: 28px;
  font-weight: 700;

  color: ${colors.white};
`;

const InputField = styled.input`
  display: flex;

  padding: ${s8};

  font-size: 22px;
  line-height: 28px;
  font-weight: 500;

  color: ${colors.black};

  border: none;

  &::placeholder {
    color: ${colors.blackOpacity04};
  }
`;

export { InputContainer, InputLabel, InputField };
