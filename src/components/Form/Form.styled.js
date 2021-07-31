import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s4, s8, s16, s20, s24, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const FormContainer = styled.div`
  display: flex;

  width: 1000px;

  margin: auto;
  margin-top: ${s96};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const FormContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s64} 0;
`;

const FormContainerLeftImage = styled.img`
  display: block;

  width: 75%;
`;

const FormContainerLeftTitle = styled.h2`
  display: block;

  margin-top: ${s20};
  padding: 0 ${s96};

  font-size: 32px;
  line-height: 38px;
  font-weight: 700;
  text-align: center;

  color: ${colors.primary};
`;

const FormContainerRight = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s20} ${s64} ${s32};

  background-color: ${colors.primary};

  div {
    width: 100%;
  }
`;

export { FormContainer, FormContainerLeft, FormContainerLeftImage, FormContainerLeftTitle, FormContainerRight };
