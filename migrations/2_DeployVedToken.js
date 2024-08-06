// migrations/2_deploy_mytoken.js
const VedToken = artifacts.require("VedToken");

module.exports = function(deployer) {
  const initialSupply = web3.utils.toWei('1000000', 'ether');
  deployer.deploy(VedToken, initialSupply); // Initial supply of 1,000,000 tokens
};
