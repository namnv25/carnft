import React from 'react';
import styles from '../index.less';
import MenuItem from './MenuItem';
import { useLocation } from 'umi';

interface MenuProps {}

export enum MenuSider {
  DASHBOARD = 'dashboard',
  MARKETPLACE = 'marketplace',
  RANKS = 'ranks',
  MYSTERY_PACKAGE = 'mystery-package',
}

const Menu = (props: MenuProps) => {
  const { pathname } = useLocation();

  const [activeKey, setActiveKey] = React.useState<MenuSider>(
    MenuSider.DASHBOARD,
  );

  const menus: any[] = [
    { key: MenuSider.DASHBOARD, path: '/' },
    { key: MenuSider.MARKETPLACE, path: '/marketplace' },
    { key: MenuSider.RANKS, path: '/ranks' },
    { key: MenuSider.MYSTERY_PACKAGE, path: '/mystery-package' },
  ];

  React.useEffect(() => {
    const getPath: string = pathname.substring(1);

    setActiveKey((getPath as MenuSider) || MenuSider.DASHBOARD);
  }, [pathname]);

  const onSelect = (newActiveKey: MenuSider) => {
    setActiveKey(newActiveKey);
  };

  return (
    <div className={styles.menuSider}>
      {menus.map((menu) => (
        <MenuItem
          key={menu.key}
          item={menu}
          activeKey={activeKey}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default React.memo(Menu);
