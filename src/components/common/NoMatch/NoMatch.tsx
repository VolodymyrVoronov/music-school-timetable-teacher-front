import React from "react";
import { useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { NoMatchContainer, NoMatchTitle, NoMatchImage, NoMatchButtonsBox } from "./NoMatch.styled.js";
import Button from "../UI/Button/Button";

import noPageFound01 from "../../../assets/page-not-found-vector.svg";

const NoMatch = (): React.ReactElement => {
  const history = useHistory();

  const onBackToAccountButtonClick = () => {
    history.replace("/account");
  };

  return (
    <Slide top>
      <NoMatchContainer>
        <NoMatchTitle>Такой страницы не существует.</NoMatchTitle>
        <NoMatchImage src={noPageFound01} />
        <NoMatchButtonsBox>
          <Button onClick={onBackToAccountButtonClick} primary text="В личный кабинет" />
        </NoMatchButtonsBox>
      </NoMatchContainer>
    </Slide>
  );
};

export default NoMatch;
