import { JsonRpcProvider, Wallet, Contract } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

const RPC_URL = process.env.QIE_RPC_URL!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const CONTRACT_ADDRESS = "0x07B1F9DE589F8d6B8B7A848F41Be4160bcDcA29B";

const ABI = [
  "function markUsed(uint256 tokenId) external"
];

async function main() {
  const provider = new JsonRpcProvider(RPC_URL);
  const signer = new Wallet(PRIVATE_KEY, provider);
  const proofPass = new Contract(CONTRACT_ADDRESS, ABI, signer);

  const tokenId = 0;

  const tx = await proofPass.markUsed(tokenId);
  console.log("⏳ Marking used tx:", tx.hash);
  await tx.wait();

  console.log("✅ Token marked as used");
}

main().catch(console.error);