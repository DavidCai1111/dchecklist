pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CheckList {
  struct Task {
    string title;
    bool isDone;
  }

  mapping(address => Task[]) private userTasksMap;

  function getTasks() public view returns (Task[] memory) {
    console.log("Fetching tasks for: %s", msg.sender);

    return userTasksMap[msg.sender];
  }

  function createTask(string memory title) public returns (Task[] memory) {
    console.log("Create task: %s, for: %s", title, msg.sender);

    userTasksMap[msg.sender].push(Task(title, false));

    Task[] memory tasks = userTasksMap[msg.sender];

    return tasks;
  }

  function finishTask(uint idx) public returns (Task[] memory) {
    console.log("Finish task idx: %s, for: %s", idx, msg.sender);

    userTasksMap[msg.sender][idx].isDone = true;

    return userTasksMap[msg.sender];
  }
}
