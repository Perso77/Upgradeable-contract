# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

we will run through deploying smart contracts that use the transparent proxy pattern in order to be upgradeable. Deploying your contracts under a proxy can be useful in order to future-proof your smart contract functionality. You will be able to deploy a version 1 contract, add new functionality and then deploy a version 2 of that contract under the proxy, and so on...

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
