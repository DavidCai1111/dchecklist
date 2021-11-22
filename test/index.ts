import { expect } from "chai";
import { ethers } from "hardhat";

describe("CheckList", function () {
  it("Should return all tasks when create an new task", async function () {
    const CheckList = await ethers.getContractFactory("CheckList");
    const checklist = await CheckList.deploy();
    await checklist.deployed();

    const createTaskTx = await checklist.createTask("test task name");

    await createTaskTx.wait();

    const tasks = await checklist.getTasks();

    console.log({ tasks })

    expect(typeof tasks.length).to.equal("number");
  });
});
