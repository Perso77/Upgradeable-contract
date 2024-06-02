const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x4200F2AD5cf2F7b5114C85eeDB784d0c6Dee6D40';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);
  await upgraded.waitForDeployment();
  const addrUpgrade = await upgraded.getAddress();
  console.log(addrUpgrade);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    addrUpgrade
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();