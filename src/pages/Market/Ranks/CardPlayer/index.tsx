import Text from '@/components/Text';
import React from 'react';
import styles from './index.less';

interface ICardPlayerProps {
  item?: {
    id: number;
    price: number;
    userName: string;
  };
}

export default function CardPlayer(props: ICardPlayerProps) {
  const { item } = props;
  return (
    <div className={styles.cardPlayer} key={item?.id}>
      <Text type="sub-title" className={styles.subTitle}>
        #{item?.id}
      </Text>
      <Text type="body-2" className={styles.txtID}>
        {item?.id} ({item?.userName})
      </Text>
      <div className={styles.price}>
        <Text type="body-bold-extra">{item?.price}</Text>
        <img src="/assets/images/ic-bnb-small.svg" alt="" />
      </div>
    </div>
  );
}
