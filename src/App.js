import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider'

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })

  const [account, setAccount] = useState(null)

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()

      if (provider) {

        setWeb3Api({
          web3: new Web3(provider),
          provider
        })
      } else {
        console.error("Please install Metamask. ")
      }


    }

    loadProvider()
  }, [])

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])
    }

    web3Api.web3 && getAccount()
  }, [web3Api.web3])

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="is-flex is-align-items-center">
            <span>
              <strong className="mr-2">Account: </strong>
            </span>
            { account ?
              <div>{account}</div> :
              <button
                className="button is-small is-rounded"
                onClick={() =>
                  web3Api.provider.request({ method: "eth_requestAccounts" }
                  )}

              >
                Connect Metamask Wallet

              </button>

            }
          </div>
          <div className="balance-view is-size-2 mb-4">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button 
            className="button is-primary is-light is-rounded mr-2">Donate</button>
          <button 
            className="button is-link is-light is-rounded">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;