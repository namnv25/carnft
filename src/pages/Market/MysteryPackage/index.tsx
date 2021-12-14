import Text from '@/components/Text';
import { translation } from '@/utils/translations';
import React from 'react';
import Box from './Box';
import styles from './index.less';
import cls from 'classnames';
import MintMystery from './Mint';
import PaginationPage from '@/components/Pagination';
import Tabs, { TabPane } from 'rc-tabs';

enum TypePage {
  MYSTERY = 'Mystery Package',
  MINT = 'Mint',
}
export default function MysteryPackage() {
  const [activeKey, setActiveKey] = React.useState<TypePage>(TypePage.MYSTERY);

  const fakeList = [
    {
      id: 465545,
      name: 'Mystery Package 1',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 4655415,
      name: 'Mystery Package 2',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 46554235,
      name: 'Mystery Package 3',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 46554415,
      name: 'Mystery Package 4',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 4655451,
      name: 'Mystery Package 5',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 4655453,
      name: 'Mystery Package 6',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 46554415,
      name: 'Mystery Package 4',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 4655451,
      name: 'Mystery Package 5',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
    {
      id: 4655453,
      name: 'Mystery Package 6',
      time: '00 : 00 : 00 : 00',
      price: 22,
      coinPrice: 0.5,
    },
  ];

  const handleChangeTab = (newActiveKey: string) => {
    setActiveKey(newActiveKey as TypePage);
  };

  const handleChangePage = (page: number, pageSize: number) => {
    console.log('🚀 ~ pageSize', pageSize);
    console.log('🚀 ~ page', page);
  };

  return (
    <div className={styles.content}>
      <Tabs onChange={handleChangeTab} activeKey={activeKey}>
        <TabPane
          tab={translation('marketplace.mysterypacke.list.box')}
          key={TypePage.MYSTERY}
        >
          <div className={styles.container}>
            <div className={styles.mystery}>
              {fakeList.map((ele, index) => {
                return (
                  <Box
                    id={ele.id}
                    name={ele.name}
                    time={ele.time}
                    price={ele.price}
                    coinPrice={ele.coinPrice}
                    key={index}
                  />
                );
              })}
            </div>
            <div className={styles.contentPage}>
              <PaginationPage
                total={100}
                pageSize={9}
                onChange={handleChangePage}
              />
            </div>
          </div>
        </TabPane>
        <TabPane
          tab={translation('marketplace.mysterypacke.mint')}
          key={TypePage.MINT}
        >
          <MintMystery />
        </TabPane>
      </Tabs>
    </div>
  );
}
