require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
  paths: {
    artifacts: "./src/artifacts",
  },
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9a328fedd4ed44598ac5231eb060d55b",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    // apiKey: process.env.ETHERSCAN_API_KEY
    apiKey: "WPJMXXNJ9KPDZG42CVUJXDQ71Y2MV66HCN"
  }
};
