import React from "react";
import { useSelector } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";

import AccountCard from "../AccountCard/AccountCard";

import { AccountCardsContainer } from "./AccountCards.styled";

const AccountCards = (): React.ReactElement => {
  const { accountCardsSettings } = useSelector((state: RootState) => state.globalReducer);

  return (
    <AccountCardsContainer>
      {accountCardsSettings.map((card) => {
        const { id, image, text, path } = card;
        return (
          <Slide top key={id}>
            <AccountCard image={image} text={text} path={path} />
          </Slide>
        );
      })}
    </AccountCardsContainer>
  );
};

export default AccountCards;
