import React from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import { useHistory } from 'react-router';

interface IBoxProps {
  id?: number;
  name: string;
  time?: Date | string;
  price: number;
  coinPrice: number;
}

export default function Box(props: IBoxProps) {
  const history = useHistory();
  const { id, name, time, price, coinPrice } = props;

  const goDetailBox = () => {
    history.push(`/mystery-package/${id}`);
  };
  return (
    <div className={styles.mysteryCard} onClick={goDetailBox}>
      <div className={styles.mysteryHeading}>
        <Text type="body-2" color="secondary-400" className={styles.headingId}>
          #{id}
        </Text>
        <Text type="headline-2">{name}</Text>
        <div className={styles.headingImage}>
          <img src="/assets/images/ic-box.svg" alt="" />
        </div>
      </div>
      <div className={styles.mysteryContent}>
        <Text type="body-5" className={styles.time}>
          {time}
        </Text>
        <div className={styles.mysteryPrice}>
          <Text type="body-4" color="neutral-200" className={styles.price}>
            ${price}
          </Text>
          <Text type="title-4">{coinPrice}</Text>
          <img
            src="/assets/images/ic-bnb-medium.svg"
            alt=""
            className={styles.solana}
          ></img>
        </div>
      </div>
    </div>
  );
}
