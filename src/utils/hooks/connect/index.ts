import { useEffect } from 'react';
import { formatWalletAddress } from '@/utils/normalizers';
import { useMount, useUpdateEffect } from '@umijs/hooks';
import { useWallet } from './wallet';
// import { walletConnectProvider } from '@/utils/contracts/ultilities';
import { WALLET_TYPE } from '@/utils/constants/wallet';

export const useProvider = () => {
  const {
    disconnectWallet,
    walletState,
    setWalletState,
    getWalletBalanceRequest,
  } = useWallet();

  const walletType = walletState?.walletType;
  const address = walletState?.walletInfo?.address;

  useMount(() => {
    if (walletState.cacheInfo) {
      setWalletState({
        ...walletState,
        walletType: walletState.cacheInfo.walletType,
      });
    }
  });

  const saveUserInfo = (account: string) => {
    const formattedAddress = formatWalletAddress(account);
    localStorage.setItem(
      '@SAM',
      JSON.stringify({
        address: account,
        formattedAddress,
        walletType,
      }),
    );
    setWalletState({
      ...walletState,
      userInfo: {
        playerId: undefined,
        ASG: undefined,
        SAE: undefined,
        name: undefined,
        nftAddress: undefined,
        myAddress: '',
        loading: true,
      },
      walletInfo: {
        ...walletState.walletInfo,
        address: account,
        formattedAddress,
      },
    });
  };

  useEffect(() => {
    if (window?.ethereum) {
      window?.ethereum.on('accountsChanged', (accounts: any) => {
        const account = accounts[0];
        if (account) {
          saveUserInfo(account);
        }
      });
      window?.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window?.ethereum.on('disconnect', () => {
        disconnectWallet();
      });
    }
  }, [walletType]);
};
