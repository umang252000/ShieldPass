# ProofPass Architecture

ProofPass is a utility NFT system built on QIE Blockchain for
ticketing, identity, and access verification.

## Components

1. QIE Wallet
- User holds ProofPass NFTs
- Signs transactions and verification requests

2. Frontend (Next.js + Tailwind)
- Wallet connection
- NFT verification UI
- Calls smart contract directly (no backend)

3. ProofPassNFT Smart Contract
- ERC721 utility NFT
- Stores pass type, expiry, and usage state
- Provides on-chain verification logic

4. QIE Blockchain
- High TPS + low fees
- Fast finality for real-time verification
- Public explorer for trustless audits

## Flow

User → Frontend → Smart Contract → QIE Blockchain → Result

No centralized server.
No off-chain trust.