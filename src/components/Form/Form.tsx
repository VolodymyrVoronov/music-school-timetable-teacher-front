import React from "react";
import { useLocation, useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Input from "./../Input/Input";
import Button from "../common/UI/Button/Button";

import { FormContainer, FormContainerLeft, FormContainerLeftImage, FormContainerLeftTitle, FormContainerRight } from "./Form.styled";

import Image01 from "./../../assets/sign-in-vector.svg";

type LocationState = {
  typeForm: string;
};

const Form = (): React.ReactElement => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const formTitle = location.state.typeForm;

  const initialFormState =
    formTitle === "login"
      ? {
          login: "",
          password: "",
        }
      : {
          firstName: "",
          secondName: "",
          login: "",
          password: "",
          password2: "",
        };

  const [formData, setFormData] = React.useState(initialFormState);

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const checkInputsFormValidity = () => {
    
  };

  console.log(formData);

  return (
    <Slide top>
      <FormContainer>
        <FormContainerLeft>
          <FormContainerLeftImage src={Image01} />
          <Slide top duration={1000}>
            <FormContainerLeftTitle>{formTitle === "login" ? "Вход в личный кабинет" : "Форма регистрации"}</FormContainerLeftTitle>
          </Slide>
        </FormContainerLeft>

        <FormContainerRight>
          {formTitle === "signin" && (
            <>
              <Slide top>
                <Input labelText="Имя" inputType="text" inputName="firstName" onChange={onFormInputChange} value={formData.firstName} />
              </Slide>

              <Slide top>
                <Input labelText="Фамилия" inputType="text" inputName="secondName" onChange={onFormInputChange} value={formData.secondName} />
              </Slide>
            </>
          )}

          <Slide top>
            <Input labelText="Логин" inputType="text" inputName="login" onChange={onFormInputChange} value={formData.login} />
          </Slide>

          <Slide top>
            <Input labelText="Пароль" inputType="password" inputName="password" onChange={onFormInputChange} value={formData.password} />
          </Slide>

          {formTitle === "signin" && (
            <>
              <Slide top>
                <Input labelText="Подтвердите пароль" inputType="password" inputName="password2" onChange={onFormInputChange} value={formData.password2} />
              </Slide>
            </>
          )}

          <Slide top duration={1000}>
            <Button text={`${formTitle === "login" ? "Вход" : "Регистрация"}`} primary={false} mt="40px" mb="10px" />
          </Slide>
        </FormContainerRight>
      </FormContainer>
    </Slide>
  );
};

export default Form;
