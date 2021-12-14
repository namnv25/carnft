import React from 'react';
import Checkbox from 'rc-checkbox';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
interface CheckBoxProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const RcCheckBox = React.forwardRef((props: CheckBoxProps, ref: any) => {
  const { className, label, disabled = false, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.wrapper}>
      {label && <Text type="body-2">{label}</Text>}

      <Checkbox className={classes} disabled={disabled} {...rest} />
    </div>
  );
});

export default React.memo(RcCheckBox);
