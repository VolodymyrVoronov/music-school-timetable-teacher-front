import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";

import { setLogin, setRegistration } from "./../../store/reducers/authReducer/actions";

import Input from "./../Input/Input";
import Button from "../common/UI/Button/Button";

import { IoIosInformationCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";

import { FormContainer, FormContainerLeft, FormContainerLeftImage, FormContainerLeftTitle, FormContainerRight, FormContainerRightInfoButton } from "./Form.styled";

import Image01 from "./../../assets/sign-in-vector.svg";
import FormInfo from "../FormInfo/FormInfo";
import LoadingBar from "../common/UI/LoadingBar/LoadingBar";

type LocationState = {
  typeForm: string;
};

type FormData = {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
};

const Form = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<LocationState>();

  const { isAuthorizing } = useSelector((state: RootState) => state.authReducer);
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

  const [formData, setFormData] = React.useState<FormData>(initialFormState);

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

      dispatch(setLogin(formData));

      // history.replace({
      //   pathname: `/account`,
      // });
    }

    if (formType === "signin") {
      dispatch(setRegistration(formData));
      // history.replace({
      //   pathname: `/login`,
      //   state: {
      //     typeForm: "login",
      //   },
      // });
    }
  };

  return (
    <Slide top>
      <FormContainer>
        {isAuthorizing && <LoadingBar color="#6C63FF" />}
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
                <Input labelText="Логин" inputType="text" inputName="login" onChange={onFormInputChange} value={formData.login} placeholder="kkotova" />
              </Slide>

              <Slide top>
                <Input labelText="Пароль" inputType="password" inputName="password" onChange={onFormInputChange} value={formData.password} placeholder="Password12345!" />
              </Slide>

              {formType === "signin" && (
                <>
                  <Slide top>
                    <Input labelText="Подтвердите пароль" inputType="password" inputName="password2" onChange={onFormInputChange} value={formData.password2} placeholder="Password12345!" />
                  </Slide>
                </>
              )}

              <Slide top duration={1000}>
                <Button disabled={isAuthorizing} onClick={onAuthButtonClick} text={`${formType === "login" ? "Вход" : "Регистрация"}`} primary={false} mt="40px" mb="10px" />
              </Slide>
            </>
          )}
        </FormContainerRight>
      </FormContainer>
    </Slide>
  );
};

export default Form;
