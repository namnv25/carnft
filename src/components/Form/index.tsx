import { Field } from 'rc-field-form';
import React from 'react';
import Text from '../Text';
import styles from './index.less';

interface FormItemProps {
  children: any;
  name?: string;
  hideError?: boolean;
  [k: string]: any;
}

const FormItem = ({ children, hideError = false, ...props }: FormItemProps) => {
  return (
    <Field {...props}>
      {({ onChange, value, ...rest }, meta, context) => {
        const { errors } = meta;

        const hasError: string = errors && errors[0];

        if (typeof children === 'function') {
          return (
            <div className={styles.formItemContainer}>
              <div>
                {children(
                  { onChange, value, meta, hasError, ...rest },
                  context,
                )}
              </div>
              {!hideError && hasError && (
                <Text
                  type="body-5"
                  color="red-500"
                  className={styles.txtFormError}
                >
                  {hasError}
                </Text>
              )}
            </div>
          );
        }

        return (
          <div className={styles.formItemContainer}>
            <div>
              {React.cloneElement(children, {
                onChange,
                value,
                ...rest,
                ...children.props,
              })}
            </div>

            {!hideError && hasError && (
              <Text
                type="body-5"
                color="red-500"
                className={styles.txtFormError}
              >
                {hasError}
              </Text>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default FormItem;
