const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/qkLE1LMu5oO3RhU2qX9dwsb4sbLRNJbG"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("../contract-abi.json");
const contractAddress = "0xa2F87E645228955c8eE7883477c5F40cD87C42c4";
 
export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => { 
  
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
