import React from "react";
import { useHistory } from "react-router-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Button from "../common/UI/Button/Button";

import { StartPageCardContainer, StartPageCardImage, StartPageCardButton } from "./StartPageCard.styled";

interface StartPageCardProps {
  image: string;
  text: string;
  path: string;
  type: string;
}

const StartPageCard = ({ image, text, path, type }: StartPageCardProps): React.ReactElement => {
  const history = useHistory();

  const onStartPageButtonClick = () => {
    history.push({
      pathname: `/${path}`,
      state: {
        typeForm: type,
      },
    });
  };

  return (
    <StartPageCardContainer>
      <StartPageCardImage src={image} alt={text} />
      <StartPageCardButton>
        <Slide top duration={1000}>
          <Button onClick={onStartPageButtonClick} text={text} primary />
        </Slide>
      </StartPageCardButton>
    </StartPageCardContainer>
  );
};

export default StartPageCard;
