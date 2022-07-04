import './App.css'; import './App.css';
import MainNavigation from './components/MainNavigation';
import React from 'react';
import MintNFT from './components/MintNFT';
import { ethers } from "ethers";
import { useMoralis } from "react-moralis"



function App() {
  const { isWeb3Enabled } = useMoralis()

  console.log("is web 3 enabled:", isWeb3Enabled)

  return (
    <div className="App">
      {
        isWeb3Enabled ?
          <div>
            <MainNavigation />
            <br />
            <MintNFT />
          </div>
          : <div>
            <MainNavigation />
            <p>Install and connect metamask</p>
          </div>
      }

    </div>
  );
  // return <div>Hi</div>
}

export default App;
