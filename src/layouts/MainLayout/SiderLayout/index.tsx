import React from 'react';
import styles from './index.less';
import Menu from './Menu';
interface SiderLayoutProps {
  children?: React.ReactNode;
}

const SiderLayout = (props: SiderLayoutProps) => {
  return (
    <div className={styles.siderLayout}>
      <Menu />
      {props?.children && <div className={styles.main}>{props.children}</div>}
    </div>
  );
};

export default React.memo(SiderLayout);
