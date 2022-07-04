import { useEffect, useState } from "react"
import React from "react"
// import { useMoralisFile } from "react-moralis"
import { ethers } from "ethers";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import imageStyles from "./NftImage.module.css"


const NFTAddress = "0xE1495f1Ba1964d62621ab8F9164b1BA8235dA973"

const provider = new ethers.providers.Web3Provider(window.ethereum);
console.log(provider);
console.log({ provider });
const signer = provider.getSigner();
const contract = new ethers.Contract(
    NFTAddress,
    NFT.abi,
    signer
);

const MintNFT = () => {
    const [nftsMinted, setNftsMinted] = useState("")

    const getCount = async () => {
        const count = await contract.returnTokenCounter()
        setNftsMinted(count.toNumber())
    }

    useEffect(() => {
        getCount()
        console.log("nfts minted", nftsMinted)
    }, [])



    return (
        <div className={imageStyles.imgDiv}>

            <br />
            {
                Array(nftsMinted + 1)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className={imageStyles.imageContainer}>
                            <NftImage tokenId={i} getCount={getCount} />
                        </div>
                    ))
            }
        </div>
    )
}


const NftImage = (props) => {
    const [minted, setMinted] = useState(false)

    const imageURI = `../images/${props.tokenId}.png`
    const metadataURI = `ipfs://QmTPN7XhiLfcUhs7ov18PwqghdSZFVNmNHbSs5rRd374Zd/${props.tokenId}`

    const isMinted = async () => {
        console.log("running is minted")
        try {
            const result = await contract.isContentOwned(metadataURI)
            console.log("is content owned result:", result)
            setMinted(result)
        } catch (error) {
            console.log("error:", error)
        }

    }


    useEffect(() => {
        isMinted()
    }, [minted])



    const mint = async () => {
        console.log("window.ethereum:", typeof window.ethereum)
        if (typeof window.ethereum !== "undefined") {

            console.log("contract", contract);
            try {
                const tCounter = await contract.returnTokenCounter()
                console.log("token counter:", tCounter)
                const tokenCounter = tCounter.toNumber()
                console.log("token counter converted:", tokenCounter)
                const tx = await contract.mint(`${metadataURI}`, { value: ethers.utils.parseEther("0.1") });
                console.log("tx: ", tx);
                await tx.wait()
                isMinted()
                props.getCount()
            } catch (err) {
                console.log("Error: ", err);
            }
        } else {
            return <p>You need to install and connect metamask</p>
        }
    }

    return (
        <div>
            {
                props.tokenId <= 19 ?
                    <div>
                        <div className={imageStyles.imgDiv}>
                            <img src={minted ? require(`../images/${props.tokenId}.png`) : require(`../images/placeholder.jpg`)} />
                            <div>
                                <h5>ID #{props.tokenId}</h5>
                                {
                                    minted ? (
                                        <p>That nft is taken</p>
                                    ) : (
                                        <button onClick={mint}>Mint NFT</button>
                                    )
                                }
                            </div>
                        </div>
                    </div> :
                    <h1>No more nfts can be minted</h1>

            }

        </div>

    )
}


export default MintNFT