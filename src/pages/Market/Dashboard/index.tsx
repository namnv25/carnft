import Text from '@/components/Text';
import React from 'react';
import { ETypeDay, ETypeDetail, fakeListDetail } from './contants';
import styles from './index.less';
import List from './List';
import TotalList from './TotalList';
import _ from 'lodash';
import PaginationPage from '@/components/Pagination';
import Tabs, { TabPane } from 'rc-tabs';
import { useIntl } from 'umi';

export default function DashBoard() {
  const intl = useIntl();

  const [activeKey, setActiveKey] = React.useState<ETypeDay>(ETypeDay.DAY);

  const listDetailTotal: any[] = [
    {
      type: ETypeDetail.LISTED,
      title: intl.formatMessage({ id: 'market.dashboard.totalListed' }),
      detail: 12000,
    },
    {
      type: ETypeDetail.VOLUMN,
      title: intl.formatMessage({ id: 'market.dashboard.totalVolumn' }),
      detail: 12000,
    },
    {
      type: ETypeDetail.SOLD,
      title: intl.formatMessage({ id: 'market.dashboard.totalSold' }),
      detail: 12000,
    },
  ];

  const handleChangeTab = (newActiveKey: string) => {
    setActiveKey(newActiveKey as ETypeDay);
  };

  const handleChangePage = (page: number, pageSize: number) => {
    console.log('🚀 ~ pageSize', pageSize);
    console.log('🚀 ~ page', page);
  };

  return (
    <div className={styles.dashboard}>
      <Tabs onChange={handleChangeTab} activeKey={activeKey}>
        <TabPane
          tab={intl.formatMessage({ id: 'market.dashboard.last24h' })}
          key={ETypeDay.DAY}
        />
        <TabPane
          tab={intl.formatMessage({ id: 'market.dashboard.7days' })}
          key={ETypeDay.WEEK}
        />
        <TabPane
          tab={intl.formatMessage({ id: 'market.dashboard.30days' })}
          key={ETypeDay.MONTH}
        />
      </Tabs>

      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.col}>
            {listDetailTotal.map((ele, index) => {
              return (
                <TotalList
                  title={ele.title}
                  detail={ele.detail}
                  key={`${index}-${ele.title}`}
                  className={`${ele.type}`}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col_6}>
            <Text
              type="headline-1"
              color="neutral-0"
              className={styles.listTitle}
            >
              {intl.formatMessage({ id: 'market.dashboard.recentlyListed' })}
            </Text>
            {fakeListDetail
              .filter((ele) => ele.type === ETypeDetail.LISTED)
              .map((item, index) => {
                return (
                  <List
                    typeList={ETypeDetail.LISTED}
                    className={ETypeDetail.LISTED}
                    item={item}
                    key={`${item.id}-${item.nitro}-${index}`}
                  />
                );
              })}
          </div>

          <div className={styles.col_6}>
            <Text
              type="headline-1"
              color="neutral-0"
              className={styles.listTitle}
            >
              {intl.formatMessage({ id: 'market.dashboard.recentlySold' })}
            </Text>
            {fakeListDetail
              .filter((ele) => ele.type === ETypeDetail.SOLD)
              .map((item, index) => {
                return (
                  <List
                    typeList={ETypeDetail.SOLD}
                    className={ETypeDetail.SOLD}
                    item={item}
                    key={`${item.id}-${item.nitro}-${index}`}
                  />
                );
              })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.colPagination}>
            <PaginationPage
              total={100}
              pageSize={5}
              className={styles.pagination}
              onChange={handleChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
