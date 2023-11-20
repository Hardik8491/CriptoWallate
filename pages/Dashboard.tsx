// @ts-nocheck 
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Main from '../components/Main'
import React from "react";
import styled from "styled-components";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const Dashboard = ({ address }: { address: any }) => {
  const [twTokens, setTwTokens] = useState([]);
  const [sanityTokens, setSanityTokens] = useState([]);
  console.log(address)
  const getCoins = async () => {
    
    const coins = await fetch(
    "https://yfol1ok2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%7B%0A++name%2CusdPrice%2CcontractAddress%2Csymbol%2Clogo%0A%7D&perspective=published"
    );
    const tempSanityTokens = await coins.json();
    

    setSanityTokens(tempSanityTokens.result);
  };
  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    
    if (sanityTokens && sanityTokens.length > 0) {
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          "cc4659f132f83951692f0a63a1c00a8515b2a72bede3a51b672bcea72b3d82c9",
          ethers.getDefaultProvider("https://mumbai.rpc.thirdweb.com/")
        )
      );
    

      sanityTokens.map((tokenItem: any) => {
        const currentToken = sdk.getTokenModule(tokenItem.contractAddress);

        setTwTokens((prevState) => [...prevState, currentToken]);
      });
    }
  }, [sanityTokens]);


  return (
    <div>
      <Wrapper>
        <Sidebar />
        <MainContainer>
          <Header
            twTokens={twTokens}
            sanityTokens={sanityTokens}
            walletAddress={address}
             connectWallet={undefined}          />
          <Main
            twTokens={twTokens}
            sanityTokens={sanityTokens}
            walletAddress={address}
          />
        </MainContainer>
      </Wrapper>
    </div>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;
