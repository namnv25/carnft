import React from 'react';
import styles from './index.less';
import { Link, useIntl } from 'umi';
import SearchInput from './components/SearchInput';
import { MenuSider } from '../../SiderLayout/Menu';
import { useLocation } from 'umi';
import cls from 'classnames';
interface NavgationProps {}

const Navigation = (props: NavgationProps) => {
  const intl = useIntl();

  const [activeKey, setActiveKey] = React.useState<MenuSider>(
    MenuSider.DASHBOARD,
  );

  const { pathname } = useLocation();
  const menus: any[] = [
    { key: MenuSider.DASHBOARD, path: '/' },
    { key: MenuSider.MARKETPLACE, path: '/marketplace' },
    { key: MenuSider.RANKS, path: '/ranks' },
    { key: MenuSider.MYSTERY_PACKAGE, path: '/mystery-package' },
  ];

  React.useEffect(() => {
    const getPath: string = pathname.substring(1);
    setActiveKey((getPath.split('/')[0] as MenuSider) || MenuSider.DASHBOARD);
  }, [pathname]);

  return (
    <ul className={styles.menu}>
      {menus.map((menu) => {
        const isActive = menu.key === activeKey;
        return (
          <li
            key={menu.key}
            className={cls([styles.menuItem, isActive && styles.active])}
          >
            <Link to={menu.path} className={styles.menuLink}>
              {intl.formatMessage({ id: `menu.${menu.key}` })}
            </Link>
          </li>
        );
      })}
      <SearchInput />
    </ul>
  );
};

export default React.memo(Navigation);
