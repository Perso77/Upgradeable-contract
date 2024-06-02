const { ethers, upgrades } = require('hardhat');

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
  // Deploy a proxy instance of the VendingMachineV1 contract with an initial number of sodas
  const proxy = await upgrades.deployProxy(VendingMachineV1, [250]);
  await proxy.waitForDeployment();
  const addrProxy = await proxy.getAddress();
  console.log(addrProxy);


  const implementationAddress = await upgrades.erc1967.getImplementationAddress(addrProxy);

  console.log('Proxy contract address: ' + addrProxy);
  // Get the implementation contract address of the deployed proxy
  console.log('Implementation contract address: ' + implementationAddress);
}

main();