import React from "react";
import { useSelector } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";

import StartPageCard from "./../StartPageCard/StartPageCard";

import { StartPageCardsContainer } from "./StartPageCards.styled";

const StartPageCards = (): React.ReactElement => {
  const { startPageCardsSettings } = useSelector((state: RootState) => state.globalReducer);

  return (
    <StartPageCardsContainer>
      {startPageCardsSettings.map((card: any) => {
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
