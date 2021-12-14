import Button from '@/components/Button';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../index.less';
import MenuItem from './MenuItem';
import { useLocation, history } from 'umi';
import { useWallet } from '@/utils/hooks/connect/wallet';

interface MenuProps {}

export enum MenuAccountSider {
  ACCOUNT = 'account',
  INVENTORY = 'inventory',
  ACTIVITY = 'activity',
  REFERRALS = 'referrals',
}

const Menu = (props: MenuProps) => {
  const intl = useIntl();
  const { pathname } = useLocation();
  const wallet = useWallet();

  const [activeKey, setActiveKey] = React.useState<MenuAccountSider>(
    MenuAccountSider.ACCOUNT,
  );

  const menus: any[] = [
    { key: MenuAccountSider.ACCOUNT, path: '/account' },
    { key: MenuAccountSider.INVENTORY, path: '/account/inventory' },
    { key: MenuAccountSider.ACTIVITY, path: '/account/activity' },
    { key: MenuAccountSider.REFERRALS, path: '/account/referrals' },
  ];

  React.useEffect(() => {
    const splitPath: string[] = pathname.split('/');
    const getPath: string = splitPath?.[2];

    setActiveKey((getPath as MenuAccountSider) || MenuAccountSider.ACCOUNT);
  }, [pathname]);

  const onSelect = (newActiveKey: MenuAccountSider) => {
    setActiveKey(newActiveKey);
  };

  const handleDisconnect = () => {
    wallet.disconnectWallet();
    history.push('/');
  };

  return (
    <div className={styles.menuSider}>
      {menus.map((menu) => (
        <MenuItem
          key={menu.key}
          item={menu}
          activeKey={activeKey}
          onSelect={onSelect}
        />
      ))}
      <Button
        type="text"
        icon={<img alt="logout" src={`/assets/images/ic-logout.svg`} />}
        block
        align="left"
        danger
        onClick={handleDisconnect}
      >
        {intl.formatMessage({ id: 'menu.logout' })}
      </Button>
    </div>
  );
};

export default React.memo(Menu);
