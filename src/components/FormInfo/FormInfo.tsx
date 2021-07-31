import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { FormInfoContainer } from "./FormInfo.styled";

const FormInfo = (): React.ReactElement => {
  return (
    <Slide top>
      <FormInfoContainer>Info</FormInfoContainer>
    </Slide>
  );
};

export default FormInfo;
