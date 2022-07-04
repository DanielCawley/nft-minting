require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



module.exports = {
  paths: {
    artifacts: "./src/artifacts",
  },
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.INFURA_API_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};


