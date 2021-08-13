import axios from "axios";

import { TimeTablesCardType } from "../store/reducers/timeTableEditorReducer/timeTableEditorReducer";

interface AuthStoreFormLoginData {
  login: string;
  password: string;
}

interface AuthStoreFormRegistrationData {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
}

interface NewStudentData {
  firstName: string;
  secondName: string;
  studentClass: string;
}

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
const fetchStudents = () => instanceAPI.get(`/students/getStudents`);
const deleteStudent = (id: string) => instanceAPI.delete(`/students/${id}`);
const updateStudent = (id: string, updatedStudent: any) => instanceAPI.patch(`/students/${id}`, updatedStudent);

const updateTimetable = (cards: TimeTablesCardType[], date: string) => {};

export { login, registration, newStudent, fetchStudents, deleteStudent, updateStudent, updateTimetable };
