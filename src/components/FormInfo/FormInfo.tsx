import React from "react";
//@ts-ignore
import Fade from "react-reveal/Fade";

import { FormInfoContainer, FormInfoText } from "./FormInfo.styled";

interface FormInfoProps {
  formType?: string;
}

const FormInfo = ({ formType }: FormInfoProps): React.ReactElement => {
  return (
    <Fade>
      <FormInfoContainer>
        {formType === "login" && (
          <>
            <FormInfoText>
              <span>Логин:</span> Введите ваш логин.
            </FormInfoText>
            <FormInfoText>
              <span>Пароль:</span> Введите ваш пароль.
            </FormInfoText>
            <FormInfoText>Поля не должны быть пустыми или содержать пустое место (пробел) в самом начале.</FormInfoText>
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
              <span>Логин:</span> Логин должен состоять из латинских букв. Пример: Катерина Котова будет - kkotova.
            </FormInfoText>
            <FormInfoText>
              <span>Пароль:</span> Пароль должен быть не меньше 8 символов и состоять только из латинских букв, иметь
              минимум одну заглавную букву, также должен включать в cебя минимум одну цифру и минимум один специальный
              символ на выбор ({" @ $ ! % * ? & "}). <br /> Пример - Trees54321@
            </FormInfoText>
            <FormInfoText>Поля не должны быть пустыми или содержать пустое место (пробел) в самом начале.</FormInfoText>
          </>
        )}
      </FormInfoContainer>
    </Fade>
  );
};

export default FormInfo;
