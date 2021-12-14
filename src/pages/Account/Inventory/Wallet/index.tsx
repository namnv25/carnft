import PaginationPage from '@/components/Pagination';
import Car from '@/pages/Market/Marketplace/Car';
import Filters from '@/pages/Market/Marketplace/Filters';
import React from 'react';
import styles from '../index.less';
import { history } from 'umi';

interface WalletProps {
  type?: string;
}

const Wallet = (props: WalletProps) => {
  const { type } = props;

  const onSell = (item: any) => {
    history.push(`/account/inventory/123`, { isSell: true });
  };

  const handleChangePage = (page: number, pageSize: number) => {
    console.log('🚀 ~ pageSize', pageSize);
    console.log('🚀 ~ page', page);
  };

  return (
    <div className={styles.wallet}>
      <Filters hidePrice hideAllCheckboxes hideSortBy />
      <div className={styles.cars}>
        {new Array(9).fill(undefined).map((val, index) => (
          <Car
            isSell
            key={index}
            onSell={() => onSell({ val, index })}
            type={type}
          />
        ))}
      </div>
      <div className={styles.contentPage}>
        <PaginationPage total={100} pageSize={9} onChange={handleChangePage} />
      </div>
    </div>
  );
};

export default React.memo(Wallet);
