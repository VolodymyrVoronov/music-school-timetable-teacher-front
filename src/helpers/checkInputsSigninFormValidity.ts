type FormData = {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
};

const regexLogin = /^[A-Za-z0-9]*$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const checkInputsSigninFormValidity = (formData: FormData) => {
  const errors: { [key: string]: string } = {};

  if (!formData.firstName) {
    errors.firstName = "Имя не должно быть пустым.";
  } else if (formData.firstName.match("[0-9]+")) {
    errors.firstName = "Имя не должно содержать цифры.";
  }

  if (!formData.secondName) {
    errors.secondName = "Фамилия не должна быть пустой.";
  } else if (formData.secondName.match("[0-9]+")) {
    errors.secondName = "Фамилия не должна содержать цифры.";
  }

  if (!formData.login) {
    errors.login = "Логин не должен быть пустым.";
  } else if (!formData.login.match(regexLogin)) {
    errors.login = "Только латинские буквы.";
  }

  if (!formData.password) {
    errors.password = "Пароль не должен быть пустым.";
  } else if (!formData.password.match(regexPassword)) {
    errors.password = "Латинскиe буквы, цифры и знаки.";
  } else if (formData.password !== formData.password2) {
    errors.password = "Пароли должны совпадать.";
  }

  if (!formData.password2) {
    errors.password2 = "Пароль не должен быть пустым.";
  } else if (!formData.password2.match(regexPassword)) {
    errors.password2 = "Латинскиe буквы, цифры и знаки.";
  } else if (formData.password !== formData.password2) {
    errors.password2 = "Пароли должны совпадать.";
  }

  return errors;
};
