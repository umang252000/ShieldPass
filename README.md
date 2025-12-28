# ShieldPass — Utility NFTs for Verifiable Access, Identity & Tickets
ShieldPass is a utility-first NFT system built on the QIE Blockchain that turns NFTs into verifiable, enforceable digital passes — not just collectibles.

Each NFT represents a real right (ticket, identity, or access) with:

- Expiry enforcement
- Single-use control
- On-chain verification

Demonstrated live on QIE Testnet with a working frontend.

<img width="1536" height="1024" alt="ChatGPT Image Dec 27, 2025, 09_43_27 PM" src="https://github.com/user-attachments/assets/6a7c599a-051c-411e-9ec1-28002a1af2d3" />

## Overview
ShieldPass is a utility-focused NFT system that transforms NFTs into real-world credentials such as:

- Event Tickets
- Digital Identity Proof
- Access Passes

Each ProofPass NFT is non-forgeable, time-bound, and verifiable on-chain.

Fraud, duplication, and reuse are prevented by smart contract logic, not by centralized servers.

## Problem Statement

Most NFT projects focus on art and ownership, but real-world systems need:

- Tickets that can’t be reused
- Identity passes that expire
- Access tokens that can be verified instantly
- No trust in centralized databases

Current Web2 solutions rely on:

- Central servers
- Easily forgeable QR codes
- No transparent audit trail

Today’s systems suffer from:

- Fake and resold tickets
- Centralized identity databases vulnerable to breaches
- Manual verification and slow settlement
- NFTs that have no real utility beyond art

These issues block real-world adoption of Web3.

##### ShieldPass solves this by enforcing access rules directly on-chain.

## Solution Overview

ShieldPass introduces utility NFTs that act as:

- Tickets (events, transport, entry)
- Can be verified instantly
- Identity passes (temporary credentials)
- Access passes (buildings, systems, platforms)
- Can be marked as used to prevent fraud

Each NFT contains:

- Pass type (Ticket / Identity / Access)
- Expiry timestamp
- Used / unused state

All verification happens on-chain, without any backend or trusted third party.

<img width="1536" height="1024" alt="ChatGPT Image Dec 27, 2025, 09_47_39 PM" src="https://github.com/user-attachments/assets/1562b5d9-d707-4594-9bdf-caaa67b51277" />

## Architecture

### Components
#### 1.QIE Wallet
- Stores ProofPass NFTs
- Signs transactions and verification requests

#### Frontend (Next.js + Tailwind)
- Wallet connect
- NFT verification UI
- Direct smart contract interaction

#### ProofPass Smart Contract
- ERC-721 utility NFT
- Stores pass type, expiry, usage
- Provides verification logic

#### QIE Blockchain
- High TPS
- Near-zero fees
- Fast finality for real-time use

### Flow
```shell
User Wallet (QIE Wallet)
        │
        ▼        
Next.js + Tailwind Frontend
        │      
        ▼     
QIE Blockchain (EVM)
        │        
        ▼        
ProofPassNFT Smart Contract
```
- Frontend calls verifyPass(tokenId)
- Smart contract returns true / false
- No backend server required
- Fully trustless verification
- No centralized backend.
- No off-chain trust.

## Smart Contract Highlights

### Key Features

- ERC-721 Utility-based NFTs (not art)
- On-chain expiry enforcement
- Anti-reuse / anti-fraud logic
- Wallet-based ownership
- No backend, no database
- Live verification via frontend
- Built for real-world scale
- Incremental token IDs
- Expiry enforcement
- Single-use enforcement
- Owner-only minting & revocation
- Enum-based pass types
- Expiry enforcement
- Usage tracking
- Admin-controlled minting

This makes ProofPass production-ready, not experimental.

### Core Functions
```shell
mintPass(...)     // Mint ticket / identity / access
verifyPass(id)    // On-chain verification
markUsed(id)      // Single-use enforcement
```
<img width="1536" height="1024" alt="ChatGPT Image Dec 27, 2025, 09_50_26 PM" src="https://github.com/user-attachments/assets/262aea9e-e09d-43f0-a4ca-35cec44243cf" />

## Threat Model & Security

ProofPass is designed to eliminate fraud by design.

### Threats Addressed

##### Fake Tickets
→ NFTs are non-forgeable and verifiable on-chain
##### Double Usage / Resale
→ Tickets can be marked as used
##### Expired Credentials
→ Expiry timestamp enforced in contract
##### Database Breaches
→ No backend, no stored personal data
##### Replay Attacks
→ Ownership checked at verification time

## Live Deployment (QIE Testnet)

- Contract Address
- 0x07B1F9DE589F8d6B8B7A848F41Be4160bcDcA29B

- Explorer
- https://www.mainnet.qie.digital

### Demo Flow (End-to-End)
#### 1.Mint NFT (Ticket)
- npx hardhat run scripts/mint.ts --network qie_testnet

Result:
- Ticket NFT minted successfully

#### 2.Verify Pass (Before Use)
- npx hardhat run scripts/verify.ts --network qie_testnet

Output:
- Token 0 valid: true

#### 3.Mark Pass as Used
npx hardhat run scripts/markUsed.ts --network qie_testnet

Output:
- Token marked as used

#### 4.Verify Again (After Use)
npx hardhat run scripts/verify.ts --network qie_testnet

Output:
 -Token 0 valid: false
 
This proves real single-use enforcement on-chain.

## Frontend Demo
### Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ethers v6
- QIE Wallet

### Frontend Features
- Wallet connect
- Token ID input
- Live on-chain verification
- Clear VALID / INVALID result

```shell
Run Frontend
cd frontend
npm install
npm run dev
```
Open forwarded port (usually 3000).

## Repository Structure
```shell
proofpass-qie/
├── contracts/
│   └── ProofPassNFT.sol
├── scripts/
│   ├── deploy.js
│   └── mint.js
├── frontend/
│   └── pages/index.js
├── docs/
│   ├── architecture.md
│   └── threat-model.md
├── README.md
└── hardhat.config.js
```

## This Project Have
- Aspect → Why It Matters
- Real utility → Not just NFT art
- On-chain rules → No backend trust
- Single-use logic → Prevents fraud
- Expiry enforcement → Time-bound access
- Live demo → Not mocked
- QIE Blockchain → Fast, low fees

## Security & Trust Model

- Only contract owner can mint or revoke
- Pass validity enforced by smart contract
- No centralized database
- All actions auditable on-chain

## Value Proposition
ShieldPass demonstrates how NFTs can be used in the real world for:
- Events & conferences
- Transit systems
- Secure facilities
- Digital identity
- Subscription access

It showcases:
- Innovation
- - Technical depth
- Real-world applicability
- Clean architecture
- Live working demo

## Tech Stack

- Blockchain: QIE (EVM compatible)
- Smart Contracts: Solidity, OpenZeppelin
- Tooling: Hardhat v3, Ignition
- Frontend: Next.js, Tailwind, ethers v6
- Wallet: QIE Wallet

## Future Enhancements

- Soulbound (non-transferable) passes
- QR-code scanning integration
- ZK-based privacy verification
- Role-based access control
- Admin dashboard
- Batch minting
- DID integration
- DAO-based issuers
- Validator-level verification APIs
- Stadiums, colleges, airports, offices
- Cross-chain verification

---
“ShieldPass turns NFTs into verifiable, single-use access passes with expiry enforcement — demonstrated live on QIE Blockchain.”
