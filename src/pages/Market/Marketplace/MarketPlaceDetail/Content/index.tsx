import Text from '@/components/Text';
import { memo, useState } from 'react';
import Footer from './Footer';
import HeadingBoxDetail from './HeadingBoxDetail';
import styles from './index.less';

interface ContentProps {
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
  const { data } = props;
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  return (
    <div className={styles.content}>
      <div className={styles.detailBox}>
        <Text type="body-5" className={styles.timeCountDown} color="neutral-0">
          {data.time}
        </Text>
        <img src="/assets/images/ic-car-iventory.svg" alt="" />
      </div>
      <div className={styles.detailContent}>
        <HeadingBoxDetail data={data} />
        <Footer data={data} />
      </div>
    </div>
  );
};
export default memo(Content);
