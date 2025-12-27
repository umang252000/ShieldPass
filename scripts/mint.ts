import { JsonRpcProvider, Wallet, Contract } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

// 🔐 ENV
const RPC_URL = process.env.QIE_RPC_URL!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;

// ✅ DEPLOYED CONTRACT
const CONTRACT_ADDRESS = "0x07B1F9DE589F8d6B8B7A848F41Be4160bcDcA29B";

// ✅ Minimal ABI (only what we need)
const ABI = [
  "function mintPass(address to, uint8 passType, uint256 expiry, string tokenURI) external returns (uint256)"
];

async function main() {
  const provider = new JsonRpcProvider(RPC_URL);
  const signer = new Wallet(PRIVATE_KEY, provider);

  console.log("Minting from:", signer.address);

  const proofPass = new Contract(
    CONTRACT_ADDRESS,
    ABI,
    signer
  );

  // ⏰ Expiry: 24 hours from now
  const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;

  const tx = await proofPass.mintPass(
    signer.address,
    0, // 0 = TICKET
    expiry,
    "https://example.com/metadata/ticket.json"
  );

  console.log("⏳ Transaction sent:", tx.hash);
  await tx.wait();

  console.log("✅ Ticket NFT minted successfully");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});