// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error Nft__ContentAlreadyOwned();
error Nft__YouBetterPayUpMore();
error Nft__Only20NftsInThisCollection();

contract NFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    mapping(string => uint8) public existingURIs;

    constructor() public ERC721("PractiseNFT", "PNFT") {
        tokenCounter = 0;
    }

    //assign a new tokenId to a  new owner
    //safe mint is used to mint a new NFT
    function mint(string memory tokenURI) public payable {
        if (tokenCounter >= 20) {
            revert Nft__Only20NftsInThisCollection();
        }
        if (existingURIs[tokenURI] == 1) {
            revert Nft__ContentAlreadyOwned();
        }
        if (msg.value < 0.1 ether) {
            revert Nft__YouBetterPayUpMore();
        }
        uint256 newTokenId = tokenCounter;
        //safeMint was inherited already
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        existingURIs[tokenURI] = 1;
        tokenCounter += 1;
    }

    function withdrawAllFunds() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    function returnTokenCounter() public view returns (uint256) {
        return tokenCounter;
    }
}
