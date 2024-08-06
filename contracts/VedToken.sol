// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VedToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("VedToken", "VST") {
    _mint(msg.sender, initialSupply);
  }
}
