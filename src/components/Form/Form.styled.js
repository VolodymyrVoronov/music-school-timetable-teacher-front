import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s8, s20, s32, s64, s96 } from "./../../styles/spacer";

const FormContainer = styled.div`
  display: flex;

  width: 1000px;
  min-height: 666px;

  margin: auto;
  margin-top: ${s96};
  margin-bottom: ${s64};

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
  position: relative;
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

const FormContainerRightInfoButton = styled.span`
  position: absolute;
  display: block;

  top: ${s8};
  right: ${s8};

  margin: 0;
  padding: 0;

  font-size: 40px;
  line-height: 30px;

  border-radius: 50%;

  svg {
    color: ${colors.white};
  }

  &:hover {
    cursor: pointer;
  }
`;

const FormError = styled.p`
  position: absolute;
  display: flex;

  padding-top: 5px;

  font-weight: 700;

  color: ${colors.error};
`;

export {
  FormContainer,
  FormContainerLeft,
  FormContainerLeftImage,
  FormContainerLeftTitle,
  FormContainerRight,
  FormContainerRightInfoButton,
  FormError,
};
