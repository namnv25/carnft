import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import { useIntl } from 'umi';
import Wallet from './Wallet';
import InGame from './InGame';
import GeneralSettings from './GeneralSettings';

interface WalletsProps {}

const Wallets = (props: WalletsProps) => {
  const intl = useIntl();

  return (
    <Tabs defaultActiveKey="wallet">
      <TabPane
        tab={intl.formatMessage({ id: 'account.wallets.wallet' })}
        key="wallet"
      >
        <Wallet />
      </TabPane>
      <TabPane
        tab={intl.formatMessage({ id: 'account.wallets.inGame' })}
        key="inGame"
      >
        <InGame />
      </TabPane>
      <TabPane
        tab={intl.formatMessage({ id: 'account.wallets.generalSettings' })}
        key="generalSettings"
      >
        <GeneralSettings />
      </TabPane>
    </Tabs>
  );
};

export default React.memo(Wallets);
