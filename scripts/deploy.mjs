import hre from "hardhat";

async function main() {
  // Hardhat v3 runtime injection (no typing)
  const { ethers } = hre;

  if (!ethers) {
    throw new Error("ethers not injected — check hardhat-ethers plugin");
  }

  const ProofPass = await ethers.getContractFactory("ProofPassNFT");
  const proofPass = await ProofPass.deploy();

  await proofPass.waitForDeployment();

  const address = await proofPass.getAddress();
  console.log("✅ ProofPass deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});