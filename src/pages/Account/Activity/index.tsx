import cls from 'classnames';
import React from 'react';
import { tableActivity, tableWallet } from './constants';
import Table from 'rc-table';
import '@/global/theme.less';
import styles from './index.less';
import Text from '@/components/Text';
import Tabs, { TabPane } from 'rc-tabs';
import { useIntl } from 'umi';

interface ActivityProps {}

enum TypeActvity {
  ITEMS = 'items',
  WALLET = 'wallet',
}
const Activity = (props: ActivityProps) => {
  const intl = useIntl();

  const [activeKey, setActiveKey] = React.useState(TypeActvity.ITEMS);

  const columnsItem: any[] = [
    {
      title: intl.formatMessage({ id: 'account.activity.table.time' }),
      dataIndex: 'time',
      key: 'time',
      width: 210,
    },

    {
      title: intl.formatMessage({ id: 'account.activity.table.type' }),
      dataIndex: 'type',
      key: 'type',
      width: 116,
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.name' }),
      dataIndex: 'name',
      key: 'name',
      width: 350,
      render: (item: string, record: any) => {
        return (
          <div className={styles.contanierName}>
            <Text type="body-2" color="neutral-0">
              {item}
            </Text>
            <Text type="body-2" color="neutral-0">
              x{record.quantity}
            </Text>
          </div>
        );
      },
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.price' }),
      dataIndex: 'price',
      key: 'price',
      width: 234,
      render: (item: number) => {
        return (
          <>
            <img
              src="/assets/images/ic-bnb-small.svg"
              className={styles.imagePrice}
            />
            {item}
          </>
        );
      },
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.txHash' }),
      dataIndex: 'hash',
      key: 'hash',
      width: 116,
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.status' }),
      dataIndex: 'status',
      key: 'status',
      width: 117,
    },
  ];

  const columnsWallet = [
    {
      title: intl.formatMessage({ id: 'account.activity.table.time' }),
      dataIndex: 'time',
      key: 'time',
      width: 234,
    },

    {
      title: intl.formatMessage({ id: 'account.activity.table.type' }),
      dataIndex: 'type',
      key: 'type',
      width: 233,
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.price' }),
      dataIndex: 'price',
      key: 'price',
      width: 233,
      render: (item: number) => {
        return (
          <>
            <img
              src="/assets/images/ic-bnb-small.svg"
              className={styles.imagePrice}
            />
            {item}
          </>
        );
      },
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.txHash' }),
      dataIndex: 'hash',
      key: 'hash',
      width: 234,
    },
    {
      title: intl.formatMessage({ id: 'account.activity.table.status' }),
      dataIndex: 'status',
      key: 'status',
      width: 209,
    },
  ];

  const handleChangeTab = (newActiveKey: string) => {
    setActiveKey(newActiveKey as TypeActvity);
  };

  return (
    <div className={styles.activity}>
      <Tabs activeKey={activeKey} onChange={handleChangeTab}>
        <TabPane
          tab={intl.formatMessage({ id: 'account.activity.items' })}
          key={TypeActvity.ITEMS}
        >
          <div className={styles.tableActivity}>
            <Table
              data={tableActivity}
              columns={columnsItem}
              className="table"
            />
          </div>
        </TabPane>
        <TabPane
          tab={intl.formatMessage({ id: 'account.activity.wallet' })}
          key={TypeActvity.WALLET}
        >
          <div className={styles.tableActivity}>
            <Table
              data={tableWallet}
              columns={columnsWallet}
              className="table"
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default React.memo(Activity);
