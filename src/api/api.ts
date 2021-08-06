import axios from "axios";

type AuthStoreFormLoginData = {
  login: string;
  password: string;
};

type AuthStoreFormRegistrationData = {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
};

type NewStudentData = {
  firstName: string;
  secondName: string;
  studentClass: string;
};

const URL = `http://localhost:5000`;

const instanceAPI = axios.create({
  baseURL: URL,
});

instanceAPI.interceptors.request.use((req) => {
  if (localStorage.getItem(`profile`)) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem(`profile`) || "").token}`;
  }

  return req;
});

const login = (formData: AuthStoreFormLoginData) => instanceAPI.post(`/user/login`, formData);
const registration = (formData: AuthStoreFormRegistrationData) => instanceAPI.post(`/user/registration`, formData);

const newStudent = (newStudent: NewStudentData) => instanceAPI.post(`/students`, newStudent);

export { login, registration, newStudent };
