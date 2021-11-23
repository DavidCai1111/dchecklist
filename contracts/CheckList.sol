// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CheckList {
  struct Task {
    string title;
    bool isDone;
  }

  mapping(address => Task[]) private userTasksMap;

  function getTasks() public view returns (Task[] memory) {
    return userTasksMap[msg.sender];
  }

  function createTask(string memory title) public returns (Task[] memory) {
    userTasksMap[msg.sender].push(Task(title, false));

    Task[] memory tasks = userTasksMap[msg.sender];

    return tasks;
  }

  function finishTask(uint idx) public returns (Task[] memory) {
    userTasksMap[msg.sender][idx].isDone = true;

    return userTasksMap[msg.sender];
  }
}
