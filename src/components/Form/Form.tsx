import React from "react";
import { useLocation, useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { FormContainer, FormContainerLeft, FormContainerLeftImage, FormContainerLeftTitle, FormContainerRight } from "./Form.styled";

import Image01 from "./../../assets/sign-in-vector.svg";

type LocationState = {
  typeForm: string;
};

const Form = (): React.ReactElement => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const formTitle = location.state.typeForm;

  return (
    <Slide top>
      <FormContainer>
        <FormContainerLeft>
          <FormContainerLeftImage src={Image01} />
          <Slide top duration={1000}>
            <FormContainerLeftTitle>{formTitle === "login" ? "Вход в личный кабинет" : "Регистрация"}</FormContainerLeftTitle>
          </Slide>
        </FormContainerLeft>

        <FormContainerRight>Left</FormContainerRight>
      </FormContainer>
      ;
    </Slide>
  );
};

export default Form;
