// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    uint256 public counterValue;
    address public lastUser;

    event CounterIncremented(address indexed user, uint256 newCounterValue);

    function incrementCounter() public {
        counterValue += 1;
        emit CounterIncremented(msg.sender, counterValue);
    }
}