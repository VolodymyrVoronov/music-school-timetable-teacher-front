import React from "react";
import { useSelector } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";

import StartPageCard from "./../StartPageCard/StartPageCard";

import { StartPageCardsContainer } from "./StartPageCards.styled";

import { RootState } from "../../store/store";

const StartPageCards = (): React.ReactElement => {
  const { cardsSettings } = useSelector((state: RootState) => state.globalReducer);

  console.log(cardsSettings);

  return (
    <StartPageCardsContainer>
      {cardsSettings.map((card: any) => {
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
