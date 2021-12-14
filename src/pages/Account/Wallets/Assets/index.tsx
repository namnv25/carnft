import Text from '@/components/Text';
import React from 'react';
import styles from './index.less';

interface AsssetsProps {
  type: string;
  icon?: string;
  quantity: number;
}

const Asssets = ({ quantity = 0, type = '', icon = '' }: AsssetsProps) => {
  return (
    <div className={styles.assets}>
      <div className={styles.info}>
        <Text type="headline-1">{quantity}</Text>
        <Text type="headline-1">{type}</Text>
      </div>
      <div className={styles.wrapIcon}>
        {icon && <img alt="" src={icon} className={styles.icon} />}
      </div>
    </div>
  );
};

export default React.memo(Asssets);
