const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol");
require('dotenv').config()

const nftData = [
  {
   "name":"NFT 1",
      "description":"This is the first NFT",
      "image":"https://maroon-striped-wildebeest-439.mypinata.cloud/ipfs/Qmd7vVGBWt2zQJSAwekQWYHiRAZqKppGPR7B6eFBTFC7uq?_gl=1*5pw1vq*_ga*MTcyMDI2NzM5OS4xNjkyODA5OTAy*_ga_5RMPXG14TE*MTY5MjgwOTkwMi4xLjEuMTY5MjgxMDUwNi40NC4wLjA."
  },
  {
    "name":"NFT 2",
    "description":"This is the first NFT",
    "image":"https://maroon-striped-wildebeest-439.mypinata.cloud/ipfs/QmU1PunCwyDRSDw2rXVnW9Z8dXBv61zW8CVb6p8jQ1zAdr?_gl=1*5pw1vq*_ga*MTcyMDI2NzM5OS4xNjkyODA5OTAy*_ga_5RMPXG14TE*MTY5MjgwOTkwMi4xLjEuMTY5MjgxMDUwNi40NC4wLjA."
},
{
  "name":"NFT 3",
  "description":"This is the first NFT",
  "image":"https://maroon-striped-wildebeest-439.mypinata.cloud/ipfs/QmQnxdtUjSG4BVr9KZjYatEhKr67TivQEJeMrxpLCBHxBF?_gl=1*1fa4e08*_ga*MTcyMDI2NzM5OS4xNjkyODA5OTAy*_ga_5RMPXG14TE*MTY5MjgwOTkwMi4xLjEuMTY5MjgxMDUwNi40NC4wLjA."
},
{
  "name":"NFT 4",
  "description":"This is the first NFT",
  "image":"https://maroon-striped-wildebeest-439.mypinata.cloud/ipfs/QmPsweKNRg7v1tJGXXwJnqHQyi8Ef2HH8WabQ1NSGfSqyL?_gl=1*1pal6pe*_ga*MTcyMDI2NzM5OS4xNjkyODA5OTAy*_ga_5RMPXG14TE*MTY5MjgwOTkwMi4xLjEuMTY5MjgxMDUwNi40NC4wLjA."
},
{
  "name":"NFT 5",
  "description":"This is the first NFT",
  "image":"https://maroon-striped-wildebeest-439.mypinata.cloud/ipfs/Qmb6JhdSqoMYkRZ21xPD3EGAULdaA8YjbqAxAmSVn4mSAm?_gl=1*1pal6pe*_ga*MTcyMDI2NzM5OS4xNjkyODA5OTAy*_ga_5RMPXG14TE*MTY5MjgwOTkwMi4xLjEuMTY5MjgxMDUwNi40NC4wLjA."
}

];

const contractAddress = "0x30004623bd6182C33F83Ab4b439D9D44fC3BBd99";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x9BFaf3862a8f99a45B4fA2cfcaA1665a13eC4d60"; // place your public address for your wallet here

async function main() {
  const contract = await hre.ethers.getContractAt(tokenABI, contractAddress);
  let tokenID = 0;



    const setDescriptionTx = await contract.setTokenPrompt(tokenID, description);
    await setDescriptionTx.wait();
    tokenID++;
  }
console.log("5 NFT minted");


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
