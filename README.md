# Kolective

Kolective is a cutting-edge Web3 platform that combines AI-driven insights with social investing, enabling users to make informed trading decisions effortlessly. The platform offers AI-powered risk profiling, Key Opinion Leader (KOL) recommendations, automated trading, and token management features.

## 🌐 Live Demo
[Kolective Website](https://kolective.vercel.app)

---

## 🚀 Features
- **AI-Powered Risk Profiling** - Categorizes users as Conservative, Balanced, or Aggressive based on a questionnaire.
- **KOL Recommendations** - Recommends traders based on community following, profitability, and AI analysis.
- **Automated Trading** - Allows users to allocate tokens to an AI agent wallet that follows KOL trading signals.
- **Token Swap** - Seamlessly swap tokens directly on the platform.
- **Token Bridge** - Cross-chain transfers using deBridge.
- **Faucet** - Claim $S tokens for testing.
- **Dashboard** - Manage KOLs, track transaction history, monitor positions, and check AI & main wallet balances.
- **Comprehensive Docs** - Provides in-depth guides for users and developers.

---

## 📂 Pages Structure

| Page        | Description  |
|------------|--------------|
| **Home** | Homepage kolective. |
| **Strategy** | Steps to create an AI wallet, generate a risk profile, and get KOL recommendations. |
| **Swap** | Swap tokens on-chain easily. |
| **Bridge** | Cross-chain asset transfers using deBridge. |
| **Faucet** | Claim free $S tokens for testing. |
| **Docs** | Detailed platform documentation. |
| **Dashboard** | Manage KOLs, view transaction history, see active positions, check main wallet & AI wallet details. |

---

## 🛠 Tech Stack
- **Frontend**: Next.js, TailwindCSS, HeroUI
- **Smart Contracts & Blockchain**: ethers.js, wagmi
- **Backend & API**: GraphQL
- **Validation**: Zod

---

## 🏗 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Kolective/kolective-web
cd kolective-web
```

### 2️⃣ Install dependencies
```bash
yarn install
# or
npm install
```

### 3️⃣ Create a `.env` file and add necessary environment variables
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
NEXT_PUBLIC_RPC_URL_SONIC_BLAZE_TESTNET=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_API_AGENT_URL=
NEXT_PUBLIC_API_GRAPHQL_URL=
```

### 4️⃣ Run the development server
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 🎯 Contributing
We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📜 License
This project is licensed under the MIT License.
