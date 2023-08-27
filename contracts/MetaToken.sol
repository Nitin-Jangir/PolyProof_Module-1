// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ModifiedNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenCounter;

    mapping(uint256 => string) private tokenDescriptions;

    constructor() ERC721("ModifiedNFT", "MNFT") {}

    function setDescription(uint256 tokenId, string memory description) external onlyOwner {
        tokenDescriptions[tokenId] = description;
    }

    function getDescription(uint256 tokenId) external view returns (string memory) {
        return tokenDescriptions[tokenId];
    }

    function mintNewToken(address receiver, string memory description) external onlyOwner {
        uint256 tokenId = _tokenCounter.current();
        _mint(receiver, tokenId);
        tokenDescriptions[tokenId] = description;
        _tokenCounter.increment();
    }
}
