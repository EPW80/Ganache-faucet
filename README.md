# Faucet application

The faucet application will enable users to donate and withdraw funds from the smart contract. Users will interact with a smart contract through the website connected to the blockchain network through the Metamask wallet. The front end of the application is built with React library and Bulma framework, for smart contract creation was used Truffle development environment and Ganache(private blockchain). This application aims to cover the basics while having fun working on something practical.

## Required

- [Ganache](https://trufflesuite.com/ganache/)
- [Metamask](https://metamask.io/)

## Technologies Used

React: is a JavaScript library for building user interfaces. In this project, React is used to develop the front-end, ensuring a reactive and modular design.

Features:
- Single-page application for seamless user experience.
- Component-based structure for easy maintainability.
- Utilized React Hooks for state management and side effects.

Truffle: is a development environment, testing framework, and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier.

Features:
- Allows us to write smart contracts in Solidity.
- Provides tools to compile, deploy, and test smart contracts on the Ethereum blockchain.
- Integrated with popular Ethereum wallets for seamless interaction.

Ganache: is a personal Ethereum blockchain that you can run tests, execute commands, and inspect state while controlling how the chain operates.

Features:
- Enables local testing of smart contracts without incurring any real-world costs.
- Simulates full client behavior and makes developing Ethereum applications faster, easier, and safer.
- Provides a visual interface to view transaction history and account balances.

## Installation
Clone the repository:
```
git clone https://github.com/repo-link.git
```
Navigate to the project directory and install dependencies:
```
cd project-name
npm install
```

Start Ganache:
Launch Ganache UI and create a new workspace (if needed).

Compile and deploy smart contracts using Truffle:  
```
truffle compile
truffle migrate --reset
```

Connect MetaMask to Ganache:
-In MetaMask, connect to the custom RPC using the URL provided by Ganache. Import an account using the private key from Ganache.

Run the React app:
```
npm start
```

## Demo
<img src="./public/demo.gif" width="1200">

## Contributor

Erik Williams

