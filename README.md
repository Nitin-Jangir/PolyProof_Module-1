# polymod_1
# ERC721 Mumbai Bridge via fxPortal
Welcome to this repository showcasing the utilization of an Ethereum ERC721 token bridge between the Goerli testnet and the Mumbai testnet using fxPortal. This Solidity smart contract enables the seamless transfer of non-fungible tokens (NFTs) between the two testnets. The repository employs Hardhat scripts to handle various operations, including deployment, minting, approval, and deposit of NFTs.

# Functions Overview

# Mint Function
The repository includes a Hardhat script responsible for minting NFTs. All the NFTs are minted in a single batch as part of this project.

# getBalance Function
This script facilitates the retrieval of the wallet address's balance and returns it for further analysis.

# getPrompt Function
The getPrompt script serves to provide the prompts necessary for generating the corresponding images tied to the NFTs.

# approveDeposit Function
The approveDeposit script plays a crucial role in authorizing token transfers and initiating their deposit on the Mumbai testnet.

## Steps

### Install
`npm i` -- Install the dependencies

### Compile
`npx hardhat compile` 

This will compile your contract and generate the json files.

### Deploy on Goerli Testnet

Make sure hardhat.config.js contains url and private key for deployment.

`npx hardhat run scripts/deploy.js --network goerli`

This script deploys our contract on ethereum goerli testnet and generates the contract address.
We copy the contract address.

### Verify
`npx hardhat verify your_contract_address --network goerli`

This script will help you to verify and publish your contract on etherscan goerli testnet (not necessary).

### Mint NFTs on Goerli Testnet
- The contract address and wallet address must be provided to mint.js script.
 
`npx hardhat run scripts/mint.js --network goerli`

This scripts mints the NFTs to your wallet address.

### Approve and Deposit To Mumbai Testnet

- The contract address and wallet address must be provided to approveDeposit.js script.
- fxERC71RootAddress mustbe provided.
  
`npx hardhat run scripts/approveDeposit.js --network goerli`

- This Script approves and bridges our NFTs from goerli to Mumbai testnet.


### getBalance of Mumbai Testnet

- The contract address of NFTs deploymnet and wallet address must be provided to getBalance.js script.

`npx hardhat run scripts/getBalance.js --network mumbai`

- This script fetches the balance of our wallet from mumbai testnet and display on screen.


## Video Walkthrough
https://www.loom.com/share/0e6123182e574b0caad5ce6e2b508421?sid=e62eaac1-5711-44db-8d2b-42c2873c92e1
