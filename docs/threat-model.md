# ProofPass Threat Model

## Threats Addressed

1. Fake Tickets
- NFTs are non-forgeable
- Ownership verified on-chain

2. Double Spending / Reuse
- Tickets can be marked as "used"
- Used NFTs fail verification

3. Expired Credentials
- Expiry timestamp enforced on-chain

4. Centralized Database Breach
- No backend
- No stored user data

5. Replay Attacks
- Ownership checked at time of verification

## Trust Assumptions

- QIE Blockchain consensus security
- Wallet private key safety

ProofPass eliminates fraud by design, not policy.