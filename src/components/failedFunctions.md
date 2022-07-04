<!-- const [myipfsHash, setIPFSHASH] = useState('')
    const [file, setFile] = useState()

    // ! uploading metadata image
    const { saveFile } = useMoralisFile()
    const [base64, setBase64] = useState("")
    const [metadataObject, setMetadataObject] = useState({})
    const [imageUrl, setImageUrl] = useState("")
    const [metadataUrl, setMetadataUrl] = useState("")
    const { save } = useNewMoralisObject(`exampleNft1`);


    useEffect(() => {
        getBase64()
    }, [])


    const getBase64 = () => {
        const imageUrl = nft1
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL("image/png");
            const split = dataURL.split(",")
            const data = split[1]
            setBase64(data)
            // uploadImage()
            // uploadMetadata(base64, 1)
        }
        img.src = imageUrl
    }


    const uploadMetadataImage = async (tokenId = 1) => {
        tokenId = 1
        console.log("tokenId:", tokenId)

        let imgUrl = "the old cunt"

        console.log("trying to save the file with base 64 value of", base64)
        await saveFile(
            "1.png",
            { base64 },
            {
                type: "base64",
                saveIPFS: true,
                onSuccess: (result) => {
                    setImageUrl(result.ipfs())
                    imgUrl = result.ipfs()
                    console.log(result.ipfs())
                    uploadMetadataObject(result.ipfs())
                },
                onError: (error) => console.log(error),
            }
        );


    }

    const uploadMetadataObject = async (imageUrl, tokenId = 1) => {
        tokenId = 1

        setMetadataObject({
            name: `nft example ${tokenId}`,
            description: `nft example ${tokenId} random description`,
            imageUrl: imageUrl
        })

        const metadataObj = {
            name: `nft example ${tokenId}`,
            description: `nft example ${tokenId} random description`,
            imageUrl: imageUrl
        }
        console.log("metadata object:", metadataObj)
        const ipfsFile = await saveFile(`exampleNft${tokenId}`, {
            base64: btoa(JSON.stringify(metadataObj)),
        },
            {
                type: "json",
                saveIPFS: true,
                onSuccess: (result) => {
                    setMetadataUrl(result.ipfs())
                    // const mtdataUrl = result.ipfs()
                    console.log(result.ipfs())
                },
                onError: (error) => console.log(error),
            })
        await ipfsFile.saveIPFS()
        console.log("file IPFS:", metadataObj)
        Mint(metadataObject)
    }



    const Mint = async (uri) => {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log({ provider });
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                NFTAddress,
                NFT.abi,
                signer
            );
            console.log("contract", contract);
            try {
                const tx = await contract.mint(uri);
                console.log("tx: ", tx);
            } catch (err) {
                console.log("Error: ", err);
            }
        }
    };

    const NFTImage = ({ tokenId, getCount }) => {
        const imageURI = `../images${tokenId}.png`

        const result = await contract.isContentOwned(metadataUri)
    }

    return (
        <div>
            <button onClick={uploadMetadataImage}>Mint Nft</button>
        </div>
    )
 -->
