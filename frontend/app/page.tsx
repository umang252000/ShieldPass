"use client";

import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x07B1F9DE589F8d6B8B7A848F41Be4160bcDcA29B";

const ABI = [
  "function verifyPass(uint256 tokenId) view returns (bool)"
];

export default function Home() {
  const [wallet, setWallet] = useState<string>("");
  const [tokenId, setTokenId] = useState<string>("");
  const [result, setResult] = useState<string>("");

  async function connectWallet() {
    if (!(window as any).ethereum) {
      alert("Please install QIE Wallet");
      return;
    }

    const provider = new ethers.BrowserProvider(
      (window as any).ethereum
    );

    const accounts = await provider.send("eth_requestAccounts", []);
    setWallet(accounts[0]);
  }

  async function verifyNFT() {
    if (!tokenId) {
      alert("Enter token ID");
      return;
    }

    const provider = new ethers.BrowserProvider(
      (window as any).ethereum
    );

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      provider
    );

    const valid: boolean = await contract.verifyPass(tokenId);
    setResult(valid ? "✅ VALID PROOF" : "❌ INVALID / USED / EXPIRED");
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">
          ProofPass
        </h1>

        <p className="text-sm text-gray-400 text-center mb-6">
          Utility NFTs for Ticketing, Identity & Access
        </p>

        {!wallet ? (
          <button
            onClick={connectWallet}
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg"
          >
            Connect Wallet
          </button>
        ) : (
          <p className="text-green-400 text-center mb-4">
            Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}
          </p>
        )}

        <input
          type="number"
          placeholder="Enter Token ID (e.g. 0)"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-4"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />

        <button
          onClick={verifyNFT}
          className="w-full bg-emerald-600 hover:bg-emerald-700 py-2 rounded-lg"
        >
          Verify ProofPass
        </button>

        {result && (
          <p className="mt-4 text-center font-semibold">
            {result}
          </p>
        )}
      </div>
    </main>
  );
}