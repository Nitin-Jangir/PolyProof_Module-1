// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol");

const contractAddress = "0x995251311625F7eb26b58360A946b0F6D758d864"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x9BFaf3862a8f99a45B4fA2cfcaA1665a13eC4d60"; // place your public address for your wallet here

async function main() {

    const nftContract = await hre.ethers.getContractAt(tokenABI, contractAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

    const noOfNFTs = 5;
    
    
    for (let i = 0; i < noOfNFTs; i++) {
      const ID = await nftContract.tokenOfOwnerByIndex(walletAddress, i);
      const approveTx = await nftContract.approve(fxERC721RootAddress, ID);
      await approveTx.wait();
    
    
    
    const depositTx = await fxContract.deposit(
      contractAddress,
      walletAddress,
      ID,
      "0x6556"
    );
    await depositTx.wait();
  } 
console.log('Approval confirmed');
console.log("Tokens deposited");
  }
  
  async function fetchNFTData() {
    try {
        await main();
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

fetchNFTData();
