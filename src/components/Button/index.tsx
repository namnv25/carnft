import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => void;
  type?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  block?: boolean;
  danger?: boolean;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    onClick,
    className,
    type = 'primary',
    align = 'center',
    disabled = false,
    loading = false,
    block = false,
    danger = false,
    icon,
    htmlType,
    ...rest
  }: ButtonProps = props;

  const buttonRef = (ref as any) || React.createRef<HTMLButtonElement>();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (disabled || loading) {
      return;
    }

    onClick && onClick(event);
  };

  const prefixCls: string = 'btn';

  const classes: string = classNames(
    prefixCls,
    {
      // [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${align}`]: align,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-danger`]: danger,
    },
    className,
  );

  const renderPrefixIcon = () => {
    if (loading && !disabled) {
      return <div className="loading" />;
    }

    if (icon) {
      return <div className="prefix-icon">{icon}</div>;
    }

    return null;
  };

  const checkHtmlType = (): ButtonProps['htmlType'] => {
    if (disabled || loading) {
      return 'button';
    }

    if (htmlType) return htmlType;

    return undefined;
  };

  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      onClick={handleClick}
      className={classes}
      type={checkHtmlType()}
      {...rest}
    >
      {renderPrefixIcon()}
      {children}
    </button>
  );
});

export default React.memo(Button);
