
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styles from "./styles/Home.module.css";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId
const projectId = '57c3ed3f7633af987eda789d503edfee'

// 2. Create wagmiConfig
const metadata = {
  name: 'web3-modal-setup',
  description: 'Web3 Modal Example',
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
    useState(false);
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };

  return (
    <>

      <WagmiConfig config={wagmiConfig}>
        <header>
          <div
            className={styles.backdrop}
            style={{
              opacity:
                isConnectHighlighted || isNetworkSwitchHighlighted
                  ? 1
                  : 0,
            }}
          />
          <div className={styles.header}>
            <div className={styles.buttons}>
              <div
                onClick={closeAll}
                className={`${styles.highlight} ${isNetworkSwitchHighlighted
                  ? styles.highlightSelected
                  : ``
                  }`}
              >
                <w3m-network-button />
              </div>
              <div
                onClick={closeAll}
                className={`${styles.highlight} ${isConnectHighlighted
                  ? styles.highlightSelected
                  : ``
                  }`}
              >
                <w3m-button />
              </div>
            </div>
          </div>
        </header>
      </WagmiConfig>
    </>
  )
}

export default App