import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import { useIntl, history, useLocation } from 'umi';
import Wallet from './Wallet';
import InGame from './InGame';
import Marketplace from './Marketplace';
import styles from './index.less';

interface InventoryProps {}

export enum TabInventory {
  WALLET = 'wallet',
  INGAME = 'ingame',
  MARKETPLACE = 'marketplace',
}

const Inventory = (props: InventoryProps) => {
  const intl = useIntl();
  const location: any = useLocation();

  const [activeKey, setActiveKey] = React.useState<TabInventory>(
    (location?.query?.tab as TabInventory) || TabInventory.WALLET,
  );

  const handleChangeTab = (newActiveKey: string) => {
    setActiveKey(newActiveKey as TabInventory);
    history.push({
      pathname: '/account/inventory',
      query: {
        tab: newActiveKey,
      },
    });
  };

  return (
    <div className={styles.inventory}>
      <Tabs
        activeKey={activeKey}
        onChange={handleChangeTab}
        destroyInactiveTabPane
      >
        <TabPane
          tab={intl.formatMessage({ id: 'account.inventory.wallet' })}
          key={TabInventory.WALLET}
        >
          <Wallet type={TabInventory.WALLET} />
        </TabPane>
        <TabPane
          tab={intl.formatMessage({ id: 'account.inventory.inGame' })}
          key={TabInventory.INGAME}
        >
          <InGame type={TabInventory.INGAME} />
        </TabPane>
        <TabPane
          tab={intl.formatMessage({ id: 'account.inventory.marketplace' })}
          key={TabInventory.MARKETPLACE}
        >
          <Marketplace type={TabInventory.MARKETPLACE} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default React.memo(Inventory);
