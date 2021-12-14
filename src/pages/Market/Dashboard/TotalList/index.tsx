import Text from '@/components/Text';
import React, { memo } from 'react';
import styles from './index.less';
import cls from 'classnames';
interface TotalListProps {
  title: string;
  detail: number;
  className?: string;
}

const TotalList = (props: TotalListProps) => {
  const { title, detail, className } = props;
  return (
    <div className={cls([styles.totalList, className])}>
      <Text type="body-2" color="neutral-0" className={styles.totalTitle}>
        {title}
      </Text>
      <Text type="title-2" color="neutral-0">
        {detail}
      </Text>
    </div>
  );
};

export default memo(TotalList);
