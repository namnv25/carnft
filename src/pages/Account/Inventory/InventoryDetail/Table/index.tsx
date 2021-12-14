import Text from '@/components/Text';
import { memo } from 'react';
import styles from './index.less';
import Table from 'rc-table';
import '@/global/theme.less';
import { translation } from '@/utils/translations';

const TableHistory = () => {
  const data = [
    {
      key: '1',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 121,
      from: '63542879',
      to: '1',
    },
    {
      key: '2',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 1231,
      from: '63542879',
      to: '1',
    },
    {
      key: '3',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 312,
      from: '63542879',
      to: 'NTLC...303',
    },
    {
      key: '4',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 123,
      from: '63542879',
      to: '1',
    },
    {
      key: '5',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 12,
      from: '63542879',
      to: '1',
    },
    {
      key: '6',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 88,
      from: '63542879',
      to: '1',
    },
    {
      key: '7',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 88,
      from: '63542879',
      to: '1',
    },
    {
      key: '8',
      date: '2021 - 11 - 16    14:26',
      event: 'Bought',
      price: 88,
      from: '63542879',
      to: '1',
    },
  ];
  const columns = [
    {
      title: translation('account.inventory.title.date'),
      dataIndex: 'date',
      key: 'date',
      width: 233,
    },
    {
      title: translation('account.inventory.title.event'),
      dataIndex: 'event',
      key: 'event',
      width: 210,
    },
    {
      title: translation('account.inventory.title.price'),
      dataIndex: 'price',
      key: 'price',
      width: 232,
      render: (item: number) => {
        return (
          <div className={styles.price}>
            <img src="/assets/images/ic-bnb-small.svg" />
            {item}
          </div>
        );
      },
    },
    {
      title: translation('account.inventory.title.from'),
      dataIndex: 'from',
      key: 'from',
      width: 234,
    },
    {
      title: translation('account.inventory.title.to'),
      dataIndex: 'to',
      key: 'to',
      width: 233,
    },
  ];
  return (
    <div className={styles.tableHistory}>
      <div className={styles.heading}>
        <Text type="title-4" className={styles.subTitle}>
          {translation('common.history')}
        </Text>
        <Table columns={columns} data={data} className="table" />
      </div>
    </div>
  );
};

export default memo(TableHistory);
