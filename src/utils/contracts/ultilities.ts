// import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import { CURRENT_NET } from '../constants/blockchain';
import { ENVIRONMENTS } from '../constants/environments';
import { WALLET_TYPE } from '../constants/wallet';
// import { ENVIRONMENTS } from '../constants/environments';
// import { WALLET_TYPE } from '../constants/wallet';

let ETHER_PROVIDER: any;
const READ_ONLY_PROVIDER = new ethers.providers.JsonRpcProvider(
  process.env.REACT_APP_NET_RPC_URL,
);

// export const walletConnectProvider = new WalletConnectProvider({
//   infuraId: '0b251edc28c443c1b72d26c9288215ff', // Required
//   rpc: {
//     [ENVIRONMENTS.CHAIN_ID]: ENVIRONMENTS.CHAIN_RPC_URL,
//   },
// });

type LocalInfo = string | null;
type LocalInfoObject =
  | {
      address: string;
      formattedAddress: string;
      walletType: string;
    }
  | undefined;

export const getProvider = async () => {
  if (ETHER_PROVIDER) {
    return ETHER_PROVIDER;
  }
  if (window?.ethereum?.chainId !== CURRENT_NET.chainId) {
    return READ_ONLY_PROVIDER;
  }

  if (window.ethereum && !ETHER_PROVIDER) {
    ETHER_PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
    return ETHER_PROVIDER;
  }
  return READ_ONLY_PROVIDER;
};

export const checkMetaMaskInstalled = () => !!window?.ethereum?.isMetaMask;

export const checkCoin98Installed = () => !!window?.ethereum?.isCoin98;

export const preContractRequest = async (
  service: Function,
  params?: any,
  withSigner?: boolean,
) => {
  const localInfo: LocalInfo = localStorage.getItem(
    ENVIRONMENTS.LOCAL_STORAGE_KEY,
  );
  let localInfoObject: LocalInfoObject;
  if (localInfo) {
    localInfoObject = JSON.parse(localInfo);
  }

  if (
    typeof localInfo === 'object' &&
    localInfoObject?.walletType === WALLET_TYPE.META_MASK
  ) {
    if (checkCoin98Installed() && checkMetaMaskInstalled()) {
      const message =
        'Can not use METAMASK when COIN98 is activated, please deactive COIN98 and refresh the browser';
      return Promise.reject(new Error(message));
    }
  }

  const provider = await getProvider();

  if (withSigner) {
    const accounts = await provider.send('eth_requestAccounts');
    if (accounts?.length <= 0) {
      return Promise.reject(new Error('Can not get accounts'));
    }
  }

  let chainIdReq = await provider.send('eth_chainId');
  const chainId = chainIdReq.result;
  if (chainId !== CURRENT_NET.chainId) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      if (error.code === 4902) {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              ...CURRENT_NET,
            },
          ],
        });
      }
    }
    chainIdReq = await provider.send('eth_chainId');
  }

  if (chainId === chainIdReq.result) {
    return service(params);
  } else {
    return Promise.reject(new Error('Not on chain'));
  }
};
