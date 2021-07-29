import React from "react";

import StartPageCard from "./../StartPageCard/StartPageCard";

import { StartPageCardsContainer } from "./StartPageCards.styled";

import loginImage01 from "./../../assets/login-vector.svg";
import joinImage01 from "./../../assets/join-vector.svg";

const cards = [
  { id: 1, image: loginImage01, text: "Вход", action: "login" },
  { id: 2, image: joinImage01, text: "Регистрация", action: "signin" },
];

const StartPageCards = (): React.ReactElement => {
  return (
    <StartPageCardsContainer>
      {cards.map((card) => {
        const { id, image, text, action } = card;
        return <StartPageCard key={id} image={image} text={text} />;
      })}
    </StartPageCardsContainer>
  );
};

export default StartPageCards;
