import React from 'react';
import styles from './index.less';
import '../global/theme.less';
import Header from '@/layouts/MainLayout/Header';
import MysteryPackageDetail from './Market/MysteryPackage/MysteryPackageDetail';

const IndexPage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <div className={styles.main}>
          <MysteryPackageDetail />
        </div>
      </div>
    </div>
  );
};

export default React.memo(IndexPage);
