const Migrations = artifacts.require("Migrations");
const CheckList = artifacts.require("CheckList");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CheckList);
};
