import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { goerli } from 'wagmi/chains'
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


const chains = [goerli];

const config = createConfig(
  getDefaultConfig({
    alchemyId: import.meta.env.VITE_ALCHEMY_ID,
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
    chains,

    // Required
    appName: "Alchemist",

    // Optional
    appDescription: "Alchemist is a decentralized application of minting Alchemist NFTs.",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={config}>
    <ConnectKitProvider theme='soft'>

      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectKitProvider>
  </WagmiConfig>
  ,
)
