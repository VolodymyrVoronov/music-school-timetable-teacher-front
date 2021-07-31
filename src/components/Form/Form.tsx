import React from "react";
import { useLocation, useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Input from "./../Input/Input";
import Button from "../common/UI/Button/Button";

import { IoIosInformationCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";

import { FormContainer, FormContainerLeft, FormContainerLeftImage, FormContainerLeftTitle, FormContainerRight, FormContainerRightInfoButton } from "./Form.styled";

import Image01 from "./../../assets/sign-in-vector.svg";
import FormInfo from "../FormInfo/FormInfo";

type LocationState = {
  typeForm: string;
};

const Form = (): React.ReactElement => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const [showInfo, setShowInfo] = React.useState(false);

  const formType = location.state.typeForm;

  const initialFormState =
    formType === "login"
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

  const onInfoButtonClick = () => {
    setShowInfo((showInfo) => !showInfo);
  };

  const checkInputsFormValidity = () => {};

  console.log(formData);

  const onAuthButtonClick = () => {
    if (formType === "login") {
      console.log("login");

      history.replace({
        pathname: `/account`,
      });
    }

    if (formType === "signin") {
      console.log("signin");
    }
  };

  return (
    <Slide top>
      <FormContainer>
        <FormContainerLeft>
          <FormContainerLeftImage src={Image01} />
          <Slide top duration={1000}>
            <FormContainerLeftTitle>{formType === "login" ? "Вход в личный кабинет" : "Форма регистрации"}</FormContainerLeftTitle>
          </Slide>
        </FormContainerLeft>

        <FormContainerRight>
          <FormContainerRightInfoButton onClick={() => onInfoButtonClick()}>
            <Slide right duration={1500}>
              {showInfo ? <IoIosCloseCircleOutline /> : <IoIosInformationCircleOutline />}
            </Slide>
          </FormContainerRightInfoButton>

          {showInfo ? (
            <FormInfo formType={formType} />
          ) : (
            <>
              {formType === "signin" && (
                <>
                  <Slide top>
                    <Input labelText="Имя" inputType="text" inputName="firstName" onChange={onFormInputChange} value={formData.firstName} placeholder="Катерина" />
                  </Slide>

                  <Slide top>
                    <Input labelText="Фамилия" inputType="text" inputName="secondName" onChange={onFormInputChange} value={formData.secondName} placeholder="Котова" />
                  </Slide>
                </>
              )}

              <Slide top>
                <Input labelText="Логин" inputType="text" inputName="login" onChange={onFormInputChange} value={formData.login} placeholder="kotovak" />
              </Slide>

              <Slide top>
                <Input labelText="Пароль" inputType="password" inputName="password" onChange={onFormInputChange} value={formData.password} placeholder="password12345" />
              </Slide>

              {formType === "signin" && (
                <>
                  <Slide top>
                    <Input labelText="Подтвердите пароль" inputType="password" inputName="password2" onChange={onFormInputChange} value={formData.password2} placeholder="password12345" />
                  </Slide>
                </>
              )}

              <Slide top duration={1000}>
                <Button onClick={() => onAuthButtonClick()} text={`${formType === "login" ? "Вход" : "Регистрация"}`} primary={false} mt="40px" mb="10px" />
              </Slide>
            </>
          )}
        </FormContainerRight>
      </FormContainer>
    </Slide>
  );
};

export default Form;
