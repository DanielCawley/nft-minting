# NFT MINTING PROJECT

*To see the project website on rinkeby go: *



Install dependencies with npm install
```npm install```


Setup moralis a local testnet


Setup a .env with the values you need:
```
REACT_APP_MORALIS_SERVER=
REACT_APP_APP_ID=
ETHERSCAN_API_KEY=
PRIVATE_KEY=
INFURA_API_KEY=
```

Run

```yarn hardhat node```
```yarn hardhat run scripts/deploy.js --network localhost```

Copy paste the contract address into the MintNFT.js NFTAddress variable

Then run

`npm start`

BOOM - its created
