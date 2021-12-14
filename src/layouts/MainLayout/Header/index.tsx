import { useIsConnected } from '@/utils/hooks/connect/wallet';
import React from 'react';
import ConnectWallet from './ConnectWallet';

import styles from './index.less';
import Navigation from './Navigation';
import UserInfo from './User';
import WalletInfo from './WalletInfo';

const Header = () => {
  const isConnected: boolean = useIsConnected();

  return (
    <header className={styles.header}>
      <UserInfo title="Race Master" src="/assets/images/ic-logo.svg" />

      <Navigation />

      {isConnected ? <WalletInfo /> : <ConnectWallet />}
    </header>
  );
};

export default React.memo(Header);
