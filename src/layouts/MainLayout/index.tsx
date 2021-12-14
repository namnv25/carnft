import React from 'react';
import Header from '@/layouts/MainLayout/Header';
import styles from './index.less';
import { RecoilRoot } from 'recoil';
import { useProvider } from '@/utils/hooks/connect';
import { useBNB } from '@/utils/hooks/bnb';
import { useLocation } from 'umi';
interface MainLayoutProps {
  children: React.ReactNode;
}
const Provider = ({ children }: MainLayoutProps) => {
  useProvider();
  useBNB();

  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <RecoilRoot>
      <Provider>{children}</Provider>
    </RecoilRoot>
  );
};

export default React.memo(MainLayout);
