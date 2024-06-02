const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x4200F2AD5cf2F7b5114C85eeDB784d0c6Dee6D40';

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory('VendingMachineV3');
  const upgraded2 = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);
  await upgraded2.waitForDeployment();
  const addrUpgrade2 = await upgraded2.getAddress();
  console.log(addrUpgrade2);

  const implementationAddress2 = await upgrades.erc1967.getImplementationAddress(
    addrUpgrade2
  );

  console.log("The current contract owner is: " + upgraded2.owner());
  console.log('Implementation contract address: ' + implementationAddress2);
}

main();