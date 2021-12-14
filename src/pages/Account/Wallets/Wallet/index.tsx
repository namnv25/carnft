import Button from '@/components/Button';
import Text from '@/components/Text';
import React from 'react';
import styles from './index.less';
import { useIntl } from 'umi';
import Assets from '../Assets';
import { history } from 'umi';
import { useWalletInfo } from '@/utils/hooks/connect/wallet';
import { useBNBPrice } from '@/utils/hooks/bnb';

interface WalletProps {}

const Wallet = (props: WalletProps) => {
  const intl = useIntl();
  const walletInfo = useWalletInfo();
  const bnbPrice = useBNBPrice();

  const balance: number = +(walletInfo.balance || 0);
  const USDTPrice: number = +(bnbPrice.usd || 0);

  const handleClickDeposit = () => {
    history.push('/account/deposit');
  };

  const handleClickWithdraw = () => {
    history.push('/account/withdraw');
  };

  const totalUSDT = (): number => balance * USDTPrice;

  return (
    <div className={styles.wraperWallet}>
      <div className={styles.wallet}>
        <div className={styles.boxInfo}>
          <Text type="headline-2">
            <img
              alt="MetaMask"
              src="/assets/images/ic-metamask-lg.svg"
              className={styles.iconMetamask}
            />
            MetaMask
          </Text>
          <div className={styles.balance}>
            <div className={styles.bnb}>
              <Text type="title-3">{balance}</Text>
              <img alt="BNB" src="/assets/images/ic-BNB-lg.svg" />
            </div>
            <Text type="headline-1" className={styles.usd}>
              ${totalUSDT().toFixed(2)}
            </Text>
          </div>

          <div className={styles.wrapBtn}>
            <Button className={styles.deposit} onClick={handleClickDeposit}>
              {intl.formatMessage({ id: 'account.wallets.wallet.deposit' })}
            </Button>
            <Button
              type="secondary"
              className={styles.withdraw}
              onClick={handleClickWithdraw}
            >
              {intl.formatMessage({ id: 'account.wallets.wallet.withdraw' })}
            </Button>
          </div>
        </div>

        <div className={styles.boxFooter}>
          <Text type="body-2">
            {intl.formatMessage({
              id: 'account.wallets.wallet.metamaskAddress',
            })}
          </Text>
          <Text type="body-1">{walletInfo.formattedAddress}</Text>
        </div>
      </div>
      <div className={styles.boxAssets}>
        <Assets quantity={120} type="RMP" />
        <Assets quantity={120} type="RMO" />
      </div>
      <div className={styles.boxAssets}>
        <Assets quantity={120} type="CARS" />
        <Assets quantity={120} type="MAPS" />
        <Assets quantity={120} type="GEARS" />
      </div>
    </div>
  );
};

export default React.memo(Wallet);
