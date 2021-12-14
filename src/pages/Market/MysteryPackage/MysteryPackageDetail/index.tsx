import { useRef, useEffect } from 'react';
import styles from './index.less';
import Content from './Content';
import TableHistory from './Table';
import { useHistory } from 'react-router';

const MysteryPackageDetail = () => {
  const history = useHistory();

  const data = {
    time: '00 : 00 : 00 : 00',
    sourceUrl: '/assets/images/ic-box-detail.svg',
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
  };

  const handleGoBack = () => {
    history.goBack();
  };

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
          <Content data={data} />
        </div>
        <div className={styles.table}>
          <TableHistory />
        </div>
      </div>
    </div>
  );
};

export default MysteryPackageDetail;
