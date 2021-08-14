import styled, { css } from "styled-components";

const LoaderSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}

  div {
    display: flex;
    justify-content: center;
  }
`;

export { LoaderSpinnerContainer };
