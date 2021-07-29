import React from "react";

import BoxShadowWrapper from "../common/UI/BoxShadowWrapper/BoxShadowWrapper";
import Button from "../common/UI/Button/Button";

import {
  StartPageCardContainer,
  StartPageCardImage,
  StartPageCardButton,
} from "./StartPageCard.styled";

type StartPageCardProps = {
  image: string;
  text: string;
};

const onLoginClick = () => {
  console.log(`Click`);
};

const StartPageCard = ({
  image,
  text,
}: StartPageCardProps): React.ReactElement => {
  return (
    <BoxShadowWrapper>
      <StartPageCardContainer>
        <StartPageCardImage src={image} alt={text} />
        <StartPageCardButton>
          <Button onClick={onLoginClick} text={text} primary />
        </StartPageCardButton>
      </StartPageCardContainer>
    </BoxShadowWrapper>
  );
};

export default StartPageCard;
