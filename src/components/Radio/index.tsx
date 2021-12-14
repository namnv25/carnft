import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Text, { TextProps } from '../Text';
import { useBoolean } from '@umijs/hooks';

interface RadioProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  value: string | number;
}
const Radio = React.forwardRef((props: RadioProps, ref: any) => {
  const { className, label, disabled = false, value, ...rest } = props;
  const radioRef = (ref as any) || React.createRef<HTMLInputElement>();

  const classes: string = classNames(styles.radioInput, className);

  return (
    <div className={styles.wrapper}>
      <label htmlFor="radio" className={styles.radio}>
        <input
          id="radio"
          type="radio"
          ref={radioRef}
          className={classes}
          disabled={disabled}
          {...rest}
        />

        <div className={styles.radioDiv} />

        {label && (
          <Text type="body-3" color="neutral-100" className={styles.label}>
            {label}
          </Text>
        )}
      </label>
    </div>
  );
});

export default Radio;
