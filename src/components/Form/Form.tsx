import React from "react";
import { useLocation, useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { FormContainer } from "./Form.styled";

type LocationState = {
  typeForm: string;
};

const Form = (): React.ReactElement => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  console.log(location);

  return (
    <Slide top>
      <FormContainer>Form</FormContainer>;
    </Slide>
  );
};

export default Form;
