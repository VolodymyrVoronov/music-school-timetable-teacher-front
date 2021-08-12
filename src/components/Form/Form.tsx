import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";
import { IoIosInformationCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";

import { RootState } from "../../store/store";
import {
  isAuthorizingFailedAC,
  isAuthorizingSucceessedAC,
  setLogin,
  setRegistration,
} from "./../../store/reducers/authReducer/actions";

import { checkInputsLoginFormValidity } from "./../../helpers/checkInputsLoginFormValidity";
import { checkInputsSigninFormValidity } from "../../helpers/checkInputsSigninFormValidity";

import Input from "./../Input/Input";
import FormInfo from "../FormInfo/FormInfo";
import Button from "../common/UI/Button/Button";
import LoadingBar from "../common/UI/LoadingBar/LoadingBar";

import {
  FormContainer,
  FormContainerLeft,
  FormContainerLeftImage,
  FormContainerLeftTitle,
  FormContainerRight,
  FormContainerRightInfoButton,
  FormError,
} from "./Form.styled";

import authFormImage01 from "./../../assets/sign-in-vector.svg";

interface LocationState {
  typeForm: string;
}

interface FormData {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
}

const Form = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<LocationState>();

  const { isAuthorizing } = useSelector((state: RootState) => state.authReducer);

  const [showInfo, setShowInfo] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [inputsErrors, setInputsErrors] = React.useState<{ [key: string]: string }>();

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

  const onInputTouch = () => {
    setTouched(() => true);
  };

  console.log(formData);

  const onAuthButtonClick = () => {
    if (formType === "login") {
      dispatch(setLogin(formData, history));

      setFormData(initialFormState);
    }

    if (formType === "signin") {
      dispatch(setRegistration(formData));
      history.replace({
        pathname: "/login",
        state: {
          typeForm: "login",
        },
      });
    }
  };

  React.useEffect(() => {
    if (formType === "login") {
      setIsValid(checkInputsLoginFormValidity(formData.login, formData.password));

      dispatch(isAuthorizingSucceessedAC(false));
      dispatch(isAuthorizingFailedAC(false));
    }

    if (formType === "signin") {
      if (touched) {
        setInputsErrors(checkInputsSigninFormValidity(formData));
        setIsValid(false);
        if (Object.getOwnPropertyNames(checkInputsSigninFormValidity(formData)).length === 0) {
          setIsValid(true);

          dispatch(isAuthorizingSucceessedAC(false));
          dispatch(isAuthorizingFailedAC(false));
        }
      }
    }
  }, [formType, formData.login, formData, touched, dispatch]);

  return (
    <Slide top>
      <FormContainer>
        {isAuthorizing && <LoadingBar color="#6C63FF" />}
        <FormContainerLeft>
          <FormContainerLeftImage src={authFormImage01} />
          <Slide top duration={1000}>
            <FormContainerLeftTitle>
              {formType === "login" ? "Вход в личный кабинет" : "Форма регистрации"}
            </FormContainerLeftTitle>
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
                    <Input
                      labelText="Имя"
                      inputType="text"
                      inputName="firstName"
                      onChange={onFormInputChange}
                      onBlur={onInputTouch}
                      value={formData.firstName}
                      placeholder="Катерина"
                    />
                    <FormError>{inputsErrors?.firstName}</FormError>
                  </Slide>

                  <Slide top>
                    <Input
                      labelText="Фамилия"
                      inputType="text"
                      inputName="secondName"
                      onChange={onFormInputChange}
                      onBlur={onInputTouch}
                      value={formData.secondName}
                      placeholder="Котова"
                    />
                    <FormError>{inputsErrors?.secondName}</FormError>
                  </Slide>
                </>
              )}

              <Slide top>
                <Input
                  labelText="Логин"
                  inputType="text"
                  inputName="login"
                  onChange={onFormInputChange}
                  onBlur={onInputTouch}
                  value={formData.login}
                  placeholder="kkotova"
                />
                <FormError>{inputsErrors?.login}</FormError>
              </Slide>

              <Slide top>
                <Input
                  labelText="Пароль"
                  inputType="password"
                  inputName="password"
                  onChange={onFormInputChange}
                  onBlur={onInputTouch}
                  value={formData.password}
                  placeholder="Password12345!"
                />
                <FormError>{inputsErrors?.password}</FormError>
              </Slide>

              {formType === "signin" && (
                <>
                  <Slide top>
                    <Input
                      labelText="Подтвердите пароль"
                      inputType="password"
                      inputName="password2"
                      onChange={onFormInputChange}
                      onBlur={onInputTouch}
                      value={formData.password2}
                      placeholder="Password12345!"
                    />
                    <FormError>{inputsErrors?.password2}</FormError>
                  </Slide>
                </>
              )}

              <Slide top duration={1000}>
                <Button
                  disabled={isAuthorizing || !isValid}
                  onClick={onAuthButtonClick}
                  text={`${formType === "login" ? "Вход" : "Регистрация"}`}
                  primary={false}
                  mt="40px"
                  mb="10px"
                />
              </Slide>
            </>
          )}
        </FormContainerRight>
      </FormContainer>
    </Slide>
  );
};

export default Form;
