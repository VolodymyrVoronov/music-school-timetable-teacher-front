import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { FormInfoContainer, FormInfoText } from "./FormInfo.styled";

type FormInfoProps = {
  formType?: string;
};

const FormInfo = ({ formType }: FormInfoProps): React.ReactElement => {
  return (
    <Slide top>
      <FormInfoContainer>
        {formType === "login" && (
          <>
            <FormInfoText>
              <span>Логин:</span> Введите ваш логин.
            </FormInfoText>
            <FormInfoText>
              <span>Пароль:</span> Введите ваш пароль.
            </FormInfoText>
          </>
        )}

        {formType === "signin" && (
          <>
            <FormInfoText>
              <span>Имя:</span> Введите ваше имя с большой буквы.
            </FormInfoText>
            <FormInfoText>
              <span>Фамилия:</span> Введите вашу фамилию с большой буквы.
            </FormInfoText>
            <FormInfoText>
              <span>Логин:</span> Логин должен состоять из латинских букв. Пример: Катерина Котова будет kkotova.
            </FormInfoText>
            <FormInfoText>
              <span>Пароль:</span> Пароль должен быть не меньше 8 символов и состоять только из латинских букв, также должен включать в cебя цифры и специальные символы на выбор ({" . , ! ? > < # $ "}).
            </FormInfoText>
          </>
        )}
      </FormInfoContainer>
    </Slide>
  );
};

export default FormInfo;
