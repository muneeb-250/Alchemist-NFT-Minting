// import { useAccount } from "wagmi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MintButton from "./components/MintButton";
import Alchemist from './assets/Alchemist.png'

function App() {

  // Make sure that this component is wrapped with ConnectKitProvider
  // const { address, isConnecting, isDisconnected } = useAccount();
  // if (isConnecting) return <div>Connecting...</div>;
  // if (isDisconnected) return <div>Disconnected</div>;
  return (
    <div className="">
      <Header />
      {/* <div>Connected Wallet: {address}</div> */}
      <div className="section-1 h-screen flex justify-center items-center gap-x-40">
        <div className="left ml-8 lg:ml-0">
          <h1 className="text-8xl text-purple-500 font-semibold mb-3">Web3.</h1>
          <h1 className="text-8xl font-black mb-6">Alchemist</h1>
          <p className="text-xl">Alchemist is a decentralized application for minting Alchemist NFTs.</p>
          <p className="text-xl">Hurry up and mint yours to be a part of this project🚀.</p>


        </div>
        <div className="right flex items-center flex-col mr-8 lg:mr-0 ">
          <img src={Alchemist} alt="alchemist NFT" height={350} width={350} className="border-8 border-white shadow-xl rounded-sm mb-5" />
          <MintButton />
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default App;
