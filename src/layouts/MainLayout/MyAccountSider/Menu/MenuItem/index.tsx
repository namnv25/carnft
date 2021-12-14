import React from 'react';
import Button from '@/components/Button';
import { history, useIntl } from 'umi';
import { MenuAccountSider } from '..';
import styles from '../../index.less';

interface MenuItemProps {
  item: Record<string, string>;
  activeKey: MenuAccountSider;
  onSelect: (menuKey: MenuAccountSider) => void;
}

const MenuItem = ({ item, onSelect, activeKey }: MenuItemProps) => {
  const intl = useIntl();

  const isActiveKey: boolean = React.useMemo(
    () => activeKey === item.key,
    [activeKey],
  );

  const handleClick = () => {
    onSelect(item.key as MenuAccountSider);

    return history.push(item.path);
  };

  return (
    <Button
      type={isActiveKey ? 'primary' : 'text'}
      icon={
        <img
          alt={item.key}
          src={`/assets/images/ic-${item.key}.svg`}
          className={isActiveKey ? styles.iconActive : ''}
        />
      }
      block
      align="left"
      onClick={handleClick}
    >
      {intl.formatMessage({ id: `menu.${item.key}` })}
    </Button>
  );
};

export default React.memo(MenuItem);
