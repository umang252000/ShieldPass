import { JsonRpcProvider, Contract } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

const RPC_URL = process.env.QIE_RPC_URL!;
const CONTRACT_ADDRESS = "0x07B1F9DE589F8d6B8B7A848F41Be4160bcDcA29B";

// Minimal ABI for verification
const ABI = [
  "function verifyPass(uint256 tokenId) view returns (bool)"
];

async function main() {
  const provider = new JsonRpcProvider(RPC_URL);
  const proofPass = new Contract(CONTRACT_ADDRESS, ABI, provider);

  const tokenId = 0; // first minted token
  const valid = await proofPass.verifyPass(tokenId);

  console.log(`Token ${tokenId} valid:`, valid);
}

main().catch(console.error);