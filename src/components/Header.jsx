import { ConnectKitButton } from "connectkit";
const Header = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center mt-5 h-1/3 mx-24">
                <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-semibold"><span className="text-purple-500 font-bold">Web3.</span>Alchemist</h1>
                </div>
                <div className="flex flex-row items-center gap-x-5">
                    <a href="https://buy-muneeb-a-coffee-web3.netlify.app/" target="blank" className="hover:text-purple-500">Buy me a Coffee ☕</a>
                    <a href="" className="hover:text-purple-500">About me</a>
                    <ConnectKitButton />
                </div>
            </div>
        </>
    )
}

export default Header;