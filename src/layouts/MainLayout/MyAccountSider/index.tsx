import { useIsConnected } from '@/utils/hooks/connect/wallet';
import React from 'react';
import styles from './index.less';
import Menu from './Menu';
import { history } from 'umi';

interface MyAccountSiderProps {
  children?: React.ReactNode;
}

const MyAccountSider = (props: MyAccountSiderProps) => {
  const isConnected: boolean = useIsConnected();

  React.useEffect(() => {
    if (!isConnected) {
      history.push('/');
    }
  }, []);

  return (
    <div className={styles.myAccountSider}>
      <Menu />
      {props?.children && <div className={styles.main}>{props.children}</div>}
    </div>
  );
};

export default React.memo(MyAccountSider);
