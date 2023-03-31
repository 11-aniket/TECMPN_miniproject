//https://eth-goerli.g.alchemy.com/v2/_73nKTvjc7zcYiMj-Gc9YOHtLmeeuYvQ
// require("@nomicfoundation/hardhat-toolbox");
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity : "0.8.0",
  networks : {
    goerli : {
      url : 'https://eth-goerli.g.alchemy.com/v2/_73nKTvjc7zcYiMj-Gc9YOHtLmeeuYvQ',
      accounts:['f9824e76c91a9a78aad799f1b184bb1413ba5167dbd013dbb603e9e354c5906b'] 
    }
  }
}