import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import StartPageCard from "./../StartPageCard/StartPageCard";

import { StartPageCardsContainer } from "./StartPageCards.styled";

import loginImage01 from "./../../assets/login-vector.svg";
import joinImage01 from "./../../assets/join-vector.svg";

const cards = [
  { id: 1, image: loginImage01, text: "Вход", path: "login", type: "login" },
  { id: 2, image: joinImage01, text: "Регистрация", path: "signin", type: "signin" },
];

const StartPageCards = (): React.ReactElement => {
  return (
    <StartPageCardsContainer>
      {cards.map((card) => {
        const { id, image, text, path, type } = card;
        return (
          <Slide top key={id}>
            <StartPageCard image={image} text={text} path={path} type={type} />
          </Slide>
        );
      })}
    </StartPageCardsContainer>
  );
};

export default StartPageCards;
