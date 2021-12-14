import Select, { Option } from 'rc-select';
import cls from 'classnames';
import styles from './index.less';
import 'rc-select/assets/index.less';
import { useBoolean, useClickAway } from '@umijs/hooks';
import React from 'react';

export interface OptionSelect {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}
interface SelectProps {
  options?: OptionSelect[];
  className?: string;
  placeholder?: string;
  classNameDropdown?: string;
  icon?: string;
  direction?: 'ltr' | 'rtl';
  dropdownRender?: any;
  open?: boolean;
}

const RCSelect = React.forwardRef((props: SelectProps, ref: any) => {
  const {
    options = [],
    className,
    placeholder,
    classNameDropdown,
    icon,
    ...rest
  } = props;

  const { state, setFalse, setTrue } = useBoolean(false);

  const divRef: any = useClickAway(() => {
    if (state) setFalse();
  });

  const renderInputIcon = () => {
    let src: string = '/assets/images/ic-arrow-down.svg';

    if (state) {
      src = '/assets/images/ic-arrow-up.svg';
    }

    if (icon) {
      return (
        <>
          {' '}
          <img src={icon} alt="" />
          <img src={src} alt="" />{' '}
        </>
      );
    }

    return <img src={src} alt="" />;
  };

  return (
    <div ref={divRef}>
      <Select
        className={cls([styles.rcselect, className])}
        placeholder={placeholder}
        dropdownClassName={cls([styles.menu, classNameDropdown])}
        inputIcon={renderInputIcon()}
        onClick={setTrue}
        animation={rest?.direction === 'rtl' ? '' : 'slide-up'}
        showArrow
        {...rest}
      >
        {options.map(({ label, value, icon }: OptionSelect, index: number) => {
          return (
            <Option value={value} key={`${label}-${value}-${index}`}>
              {icon}
              {label}
            </Option>
          );
        })}
      </Select>
    </div>
  );
});

export default React.memo(RCSelect);
