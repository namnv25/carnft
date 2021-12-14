import React from 'react';
import cls from 'classnames';
import styles from './index.less';
import Text from '@/components/Text';
interface IListItemProps {
  item: {
    type: string;
    id: number;
    image: string;
    acleration: number;
    speed: number;
    handling: number;
    nitro: number;
    price: number;
    coinPrice: number;
  };
}
export default function ListItem(props: IListItemProps) {
  const { item } = props;
  const listIconDetail = [
    {
      image: '/assets/images/ic-acceleration.svg',
      detail: ' 14.5s',
    },
    {
      image: '/assets/images/ic-top-speed.svg',
      detail: ' 405.6 km/h',
    },
    {
      image: '/assets/images/ic-handling.svg',
      detail: ' 1.31g',
    },
    {
      image: '/assets/images/ic-nitro.svg',
      detail: '11.2 km.h',
    },
  ];
  return (
    <>
      <div className={styles.listLogo}>
        <img src={item?.image} alt="" />
        <Text type="body-6" color="secondary-400" className={styles.idCar}>
          #{item?.id}
        </Text>
      </div>
      <div className={styles.listInfo}>
        <div className={styles.detailInfo}>
          <img src="/assets/images/ic-acceleration.svg" alt="" />
          <Text type="body-6" color="neutral-200">
            {item.acleration}s
          </Text>
        </div>
        <div className={styles.detailInfo}>
          <img src="/assets/images/ic-top-speed.svg" alt="" />
          <Text type="body-6" color="neutral-200">
            {item.speed} km/h
          </Text>
        </div>
        <div className={styles.detailInfo}>
          <img src="/assets/images/ic-handling.svg" alt="" />
          <Text type="body-6" color="neutral-200">
            {item.handling} g
          </Text>
        </div>
        <div className={styles.detailInfo}>
          <img src="/assets/images/ic-nitro.svg" alt="" />
          <Text type="body-6" color="neutral-200">
            {item.nitro} km.h
          </Text>
        </div>
      </div>
      <div className={styles.listPrice}>
        <Text type="body-4" color="neutral-200" className={styles.price}>
          ${item?.price}
        </Text>
        <div className={styles.coinPrice}>
          <Text type="title-2" className={styles.titleCoin}>
            {item?.coinPrice}
          </Text>
          <img
            src="/assets/images/ic-bnb-dashboard.svg"
            alt=""
            className={styles.solana}
          ></img>
        </div>
      </div>
    </>
  );
}
