import { useEffect } from "react";
import "./App.css";
import Web3 from "web3";


function App() {

  useEffect(() => {
    const loadProvider = async () => {
      let provider = null;

      if (window.ethereum) {
        provider = window.ethereum;
      }
      else if (window.web3) {
        provider = window.web3.currentProvider;

      }
      else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7545")


      }


    }

    loadProvider()
  }, [])

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="balance-view is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button
            className="btn mr-2"
            onClick={async () => {
              const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
              console.log(accounts)
            }}
          >
            Enable Ethereum
          </button>
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </div>
    </>
  );
}
export default App;