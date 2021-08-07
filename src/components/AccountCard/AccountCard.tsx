import React from "react";
import { useHistory } from "react-router-dom";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Button from "../common/UI/Button/Button";

import { AccountCardContainer, AccountCardImage, AccountCardButton } from "./AccountCard.styled";

interface AccountCardProps {
  image: string;
  text: string;
  path: string;
}

const AccountCard = ({ image, text, path }: AccountCardProps): React.ReactElement => {
  const history = useHistory();

  const onAccountCardButtonClick = () => {
    history.push({
      pathname: `/${path}`,
    });
  };

  return (
    <AccountCardContainer>
      <AccountCardImage src={image} alt={text} />
      <AccountCardButton>
        <Slide top duration={1000}>
          <Button onClick={onAccountCardButtonClick} text={text} primary />
        </Slide>
      </AccountCardButton>
    </AccountCardContainer>
  );
};

export default AccountCard;
