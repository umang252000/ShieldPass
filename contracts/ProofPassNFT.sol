// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofPassNFT is ERC721URIStorage, Ownable {

    enum PassType { TICKET, IDENTITY, ACCESS }

    struct PassData {
        PassType passType;
        uint256 expiry;
        bool used;
    }

    uint256 public tokenCounter;
    mapping(uint256 => PassData) public passDetails;

    event PassMinted(address indexed to, uint256 indexed tokenId, PassType passType, uint256 expiry);
    event PassUsed(uint256 indexed tokenId);

    constructor() ERC721("ProofPass", "PPASS") Ownable(msg.sender) {
        tokenCounter = 0;
    }

    function mintPass(
        address to,
        PassType passType,
        uint256 expiry,
        string memory tokenURI
    ) external onlyOwner returns (uint256) {

        require(expiry > block.timestamp, "Expiry must be in future");

        uint256 tokenId = tokenCounter++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);

        passDetails[tokenId] = PassData(passType, expiry, false);
        emit PassMinted(to, tokenId, passType, expiry);

        return tokenId;
    }

    function verifyPass(uint256 tokenId) public view returns (bool) {
        require(_ownerOf(tokenId) != address(0), "Pass does not exist");

        PassData memory pass = passDetails[tokenId];
        if (pass.used) return false;
        if (block.timestamp > pass.expiry) return false;

        return true;
    }

    function markUsed(uint256 tokenId) external onlyOwner {
        require(_ownerOf(tokenId) != address(0), "Pass does not exist");
        require(!passDetails[tokenId].used, "Already used");

        passDetails[tokenId].used = true;
        emit PassUsed(tokenId);
    }
}