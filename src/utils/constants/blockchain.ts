import { ENVIRONMENTS } from './environments';

const BLOCKCHAIN_NET = {
  SMART_CHAIN_TEST_NET: {
    chainName: 'Binance Smart Chain - Testnet',
    rpcUrls: [ENVIRONMENTS.CHAIN_RPC_URL],
    chainId: '0x61',
    nativeCurrency: {
      symbol: 'BNB',
      decimals: 18,
    },
    blockExplorerUrls: [ENVIRONMENTS.CHAIN_URL],
  },
};

export const CURRENT_NET = BLOCKCHAIN_NET.SMART_CHAIN_TEST_NET;
