import { useAccount, usePrepareContractWrite, useContractWrite, useContractRead, useWalletClient } from "wagmi"
import { ethers } from "ethers"
import abi from '../abi.json'
import { useState, useEffect } from "react"

const MintButton = () => {
    const [totalSupply, setTotalSupply] = useState(0)
    const { data: walletClient } = useWalletClient()
    const { isConnected } = useAccount()
    const { config, refetch } = usePrepareContractWrite({
        address: '0xf903014fe6521b9112deb0594f493fd8479d5009',
        functionName: 'safeMint',
        value: [ethers.parseEther("0.0025")],
        abi,
        walletClient,
        enabled: false

    })
    const { write: safeMint } = useContractWrite(config)

    const { data } = useContractRead({
        address: '0xf903014fe6521b9112deb0594f493fd8479d5009',
        functionName: 'totalSupply',
        abi: [{
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],

        watch: true
    })

    const handleMint = async () => {
        await refetch();
        safeMint?.();
    }

    useEffect(() => {
        data && setTotalSupply(data) && console.log(data)
    }, [data])

    if (!isConnected) return (
        <>
            <h1 className="text-2xl font-semibold mb-2">Total NFTs minted: {totalSupply.toString()}</h1>
            <button className="bg-purple-400 p-3 w-[200px] rounded-lg text-white text-lg cursor-not-allowed" disabled>Connect wallet to mint</button>
        </>
    )
    // if (isConnected) return <button className="bg-purple-500 p-3 w-[200px] rounded-lg text-white text-lg shadow-lg" onClick={() => handleMint()}>Mint</button>

    if (isConnected) return (
        <div>
            <h1 className="text-2xl font-semibold mb-2">Total NFTs minted: {totalSupply.toString()}</h1>
            <button className="bg-purple-500 p-3 w-[200px] rounded-lg text-white text-lg shadow-lg" onClick={() => handleMint()}>Mint</button>
        </div>
    )


}

export default MintButton