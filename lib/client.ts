import { http, createPublicClient, custom } from 'viem';
import { createWalletClient } from 'viem'

import { sonicBlazeTestnet } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: sonicBlazeTestnet,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL_ARBITRUM_TESTNET),
});

export const walletClient = createWalletClient({
  chain: sonicBlazeTestnet,
  transport: custom(window.ethereum)
})