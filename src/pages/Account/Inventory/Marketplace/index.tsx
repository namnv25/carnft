import PaginationPage from '@/components/Pagination';
import Car from '@/pages/Market/Marketplace/Car';
import Filters from '@/pages/Market/Marketplace/Filters';
import React from 'react';
import styles from '../index.less';

interface MarketplaceProps {
  type?: string;
}

const Marketplace = (props: MarketplaceProps) => {
  const { type } = props;

  const handleChangePage = (page: number, pageSize: number) => {
    console.log('🚀 ~ pageSize', pageSize);
    console.log('🚀 ~ page', page);
  };
  return (
    <div className={styles.marketplace}>
      <Filters />
      <div className={styles.cars}>
        {new Array(9).fill(undefined).map((val, index) => (
          <Car key={index} type={type} />
        ))}
      </div>
      <div className={styles.contentPage}>
        <PaginationPage total={100} pageSize={9} onChange={handleChangePage} />
      </div>
    </div>
  );
};

export default React.memo(Marketplace);
