import classNames from 'classnames';
import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type:
    | 'caption-1'
    | 'caption-2'
    | 'body-1'
    | 'body-2'
    | 'body-3'
    | 'body-4'
    | 'body-5'
    | 'body-6'
    | 'body-7'
    | 'headline-1'
    | 'headline-2'
    | 'title-1'
    | 'title-2'
    | 'title-3'
    | 'title-4'
    | 'title-5'
    | 'sub-title'
    | 'body-bold-extra';
  color?:
    | 'primary-100'
    | 'primary-200'
    | 'primary-300'
    | 'primary-400'
    | 'primary-500'
    | 'neutral-0'
    | 'neutral-100'
    | 'neutral-200'
    | 'neutral-300'
    | 'secondary-400'
    | 'secondary-500'
    | 'secondary-300'
    | 'secondary-200'
    | 'secondary-100'
    | 'red-500';
  align?: 'left' | 'center' | 'right';
}

const Text = (props: TextProps) => {
  const {
    children,
    className,
    type,
    color = 'neutral-0',
    disabled = false,
    align,
    onClick,
    ...rest
  }: TextProps = props;

  const prefixCls: string = 'txt';

  const classes: string = classNames(
    prefixCls,
    {
      [type]: type,
      [`${prefixCls}-${color}`]: color,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-click`]: !!onClick,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );

  const handleClick = () => {
    if (disabled) {
      return;
    }

    onClick && onClick();
  };

  return (
    <p className={classes} onClick={handleClick} {...rest}>
      {children}
    </p>
  );
};

export default React.memo(Text);
