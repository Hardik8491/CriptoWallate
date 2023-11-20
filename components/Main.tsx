import React from "react";

import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";
const Main = ({
  twTokens,
  sanityTokens,
  walletAddress,
}: {
  twTokens: any;
  sanityTokens: any;
  walletAddress: any;
}) => {
  console.log(twTokens)
  return (
    <Wrapper>
      <Portfolio
        twTokens={twTokens}
        sanityTokens={sanityTokens}
        walletAddress={walletAddress}
      />

      <Promos />
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: scroll;

  & div {
    border-radius: 0.4rem;
  }
`;
