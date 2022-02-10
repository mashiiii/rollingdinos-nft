
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";

require('dotenv').config()
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "8ce898b3863037edaba4834d922d68200820f198ec6977352ddb59dea4379b1d";

export default {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    kovan: {
      url: "https://kovan.infura.io/v3/8c661edd6d764e1e95fd0318054d331c",
      accounts: [privateKey]

    },
	bsc:{
		url: "https://bsc-dataseed.binance.org/",
		accounts: [privateKey]
	}
  }
}