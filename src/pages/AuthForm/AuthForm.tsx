import React from "react";

import Form from "./../../components/Form/Form";
import BackButton from "../../components/common/UI/BackButton/BackButton";

const AuthForm = (): React.ReactElement => {
  return (
    <>
      <BackButton path="/start-page" />
      <Form />
    </>
  );
};

export default AuthForm;
