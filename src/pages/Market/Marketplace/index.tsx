import PaginationPage from '@/components/Pagination';
import React from 'react';
import Banners from './Banners';
import Car from './Car';
import Filters from './Filters';
import styles from './index.less';

interface MarketplaceProps {}

const Marketplace = (props: MarketplaceProps) => {
  const handleChangePage = (page: number, pageSize: number) => {
    console.log('🚀 ~ pageSize', pageSize);
    console.log('🚀 ~ page', page);
  };

  return (
    <div className={styles.marketplace}>
      <Banners />
      <Filters />
      <div className={styles.cars}>
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
      <div className={styles.contentPage}>
        <PaginationPage total={100} pageSize={10} onChange={handleChangePage} />
      </div>
    </div>
  );
};

export default React.memo(Marketplace);
