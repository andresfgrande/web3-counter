import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { Counter} from "../typechain-types/Counter";

describe("Counter", function () {
    let counter: Counter;
    let owner: Signer;
    let otherUser: Signer;

    async function deployCounterFixture() {
        const [owner, otherUser] = await ethers.getSigners();
        const CounterContract = await ethers.getContractFactory("Counter");
        const counter = await CounterContract.deploy();
        
        return { counter, owner, otherUser };
    }

    beforeEach(async function () {
        ({ counter, owner, otherUser } = await loadFixture(deployCounterFixture));
      });

    describe("deployment", function(){
        it("Should set initial counter to 0", async function(){
            const counterValue = await counter.counterValue();

            expect(counterValue).to.equal(0);
        })

        it("Should have the last user as a zero address", async function(){
            const lastUser = await counter.lastUser();

            expect(lastUser).to.equal(ethers.ZeroAddress);
        })
    })

});