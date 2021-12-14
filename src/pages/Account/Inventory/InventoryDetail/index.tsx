import React from 'react';
import styles from './index.less';
import ContentMysteryDetail from './Content';
import TableHistory from './Table';
import { useHistory } from 'umi';
import { useLocation } from 'umi';
import { TabInventory } from '..';

const InventoryDetail = () => {
  const history = useHistory();
  const location: any = useLocation();

  const data = {
    time: '00 : 00 : 00 : 00',
    sourceUrl: '/assets/images/ic-car-iventory.svg',
    id: '658461',
    name: 'Mystery Pakage 1',
    owner: {
      _id: '0x02346dfg45',
      name: '0x02346dfg45',
    },
    created: {
      _id: '0x02346dfg45',
      name: '0x02346dfg45',
    },
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
    price: 22,
    coinPrice: 0.1,
    imageCoinPrice: '/assets/images/ic-bnb-big.png',
    acceleration: 14.5,
    speed: 480.6,
    handling: 1.31,
    nitro: 11.2,
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const { type } = location?.state;

  return (
    <div className={styles.detail}>
      <div className={styles.detailContainer}>
        <div className={styles.back}>
          <img
            src="/assets/images/ic-arrow-left.svg"
            alt=""
            onClick={handleGoBack}
          />
        </div>
        <div className={styles.content}>
          <ContentMysteryDetail data={data} type={type} />
        </div>
        {type !== TabInventory.INGAME && (
          <div className={styles.table}>
            <TableHistory />
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryDetail;
