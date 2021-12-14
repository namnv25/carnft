import Text from '@/components/Text';
import React, { memo } from 'react';
import cls from 'classnames';
import styles from './index.less';
import ListItem from './components/ListItem';
interface ListProps {
  typeList: string;
  className?: string;
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

const List = (props: ListProps) => {
  const { className, item } = props;
  return (
    <div className={cls([styles.list, className])}>
      <ListItem item={item} />
    </div>
  );
};

export default memo(List);
