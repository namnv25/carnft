import { memo } from 'react';
import styles from './index.less';

import HeadingBoxDetail from './components/HeadingBoxDetail';
import Footer from './components/Footer';
interface ContentProps {
  type?: string;
  data: {
    time: Date | string;
    sourceUrl: string;
    id: string;
    name: string;
    owner: {
      _id: string;
      name: string;
    };
    created: {
      _id: string;
      name: string;
    };
    info: string;
    price: number;
    coinPrice: number;
    imageCoinPrice: string;
    acceleration: number;
    speed: number;
    handling: number;
    nitro: number;
  };
}

const Content = (props: ContentProps) => {
  const { data, type } = props;

  return (
    <div className={styles.contentInventory}>
      <div className={styles.detailBox}>
        <img src="/assets/images/ic-car-iventory.svg" alt="" />
      </div>
      <div className={styles.detailContent}>
        <HeadingBoxDetail data={data} />
        <Footer data={data} type={type} isCar={false} />
      </div>
    </div>
  );
};

export default memo(Content);
