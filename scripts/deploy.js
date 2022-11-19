const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // const MyContract = await hre.ethers.getContractFactory("MyEpicNFT");
  // const contract = await MyContract.attach(
  //   "0x52CcDb34832cc3558b65F6dc9C484bCe685cAA4b" // The deployed contract address
  // );

  // // Call the function.
  // let txn = await contract.makeAnEpicNFT();
  // // Wait for it to be mined.
  // await txn.wait();
  // console.log("Minted NFT #1");

  // txn = await contract.makeAnEpicNFT();
  // // Wait for it to be mined.
  // await txn.wait();
  // console.log("Minted NFT #2");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
