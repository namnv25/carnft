import React, { useState, useEffect, useRef } from 'react';
import styles from './index.less';
import cls from 'classnames';
import { history, useIntl } from 'umi';
import { useBoolean, useClickAway } from '@umijs/hooks';
import Text from '@/components/Text';
import { useWallet } from '@/utils/hooks/connect/wallet';

enum TypeItem {
  DISCONNECT = 'disconnect',
  PROFILE = 'profile',
}
const WalletInfo = () => {
  const intl = useIntl();
  const wallet = useWallet();

  const { state, toggle, setFalse } = useBoolean(false);

  const listItems: any[] = [
    {
      type: TypeItem.PROFILE,
      title: intl.formatMessage({ id: 'menu.profile' }),
      path: '/account',
    },
    {
      type: TypeItem.DISCONNECT,
      title: intl.formatMessage({ id: 'menu.logout' }),
      path: '',
    },
  ];

  const menuRef: any = useClickAway(() => {
    if (state) setFalse();
  });

  const handleClickMenu = (event: React.MouseEvent, item: any) => {
    event.stopPropagation();
    setFalse();

    if (item.type === TypeItem.PROFILE) {
      return history.push('/account');
    }

    history.push('/');
    return wallet.disconnectWallet();
  };

  return (
    <div className={styles.wallet}>
      <div className={styles.walletPhantom}>
        <img src="/assets/images/ic-meta-mask.svg" alt="" />
        {wallet.walletState.walletInfo.formattedAddress}
      </div>
      <div className={styles.walletSolana}>
        {wallet.walletState.walletInfo.balance}
        <img src="/assets/images/ic-bnb-small.svg" alt="" />
      </div>

      <div className={styles.walletAccount} onClick={() => toggle()}>
        <img
          src="/assets/images/ic-account-lg.svg"
          alt=""
          className={styles.account}
        />

        {state && (
          <div className={styles.dropdownContent} ref={menuRef}>
            <ul className={styles.menu}>
              {listItems.map((item: any, index: number) => {
                const isActive: boolean = item.type === item;
                const isDisconect: boolean = item.type === TypeItem.DISCONNECT;

                return (
                  <li
                    onClick={(event: React.MouseEvent) =>
                      handleClickMenu(event, item)
                    }
                    key={`${item.title}-${index}`}
                    className={cls([
                      styles.item,
                      isActive && styles.active,
                      isDisconect && styles.disconnect,
                    ])}
                  >
                    <Text type="body-6" className={styles.link}>
                      {item.title}
                    </Text>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(WalletInfo);
