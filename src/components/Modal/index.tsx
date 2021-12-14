import React, { useImperativeHandle, forwardRef } from 'react';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';
import styles from './index.less';
import cls from 'classnames';
import Text, { TextProps } from '../Text';

import { useBoolean } from '@umijs/hooks';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  className?: string;
  closeIcon?: React.ReactNode;
  title: string | React.ReactNode;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  titleProps?: TextProps;
  onClose?: () => void;
  width?: number;
}

function Modal(props: ModalProps, ref: any) {
  const {
    visible,
    children,
    className,
    closeIcon,
    title,
    content,
    footer,
    titleProps,
    onClose,
    width = 443,
    ...rest
  } = props;

  const { state, setTrue, setFalse } = useBoolean(false);

  useImperativeHandle(ref, () => ({
    setTrue,
    setFalse,
  }));

  const renderTitle = () => {
    if (!title) return null;

    if (typeof title === 'string') {
      <Text
        type="title-2"
        color="neutral-0"
        {...titleProps}
        className="modal-title"
      >
        {title}
      </Text>;
    }

    return <div className="modal-title">{title}</div>;
  };

  const renderCloseIcon = (): React.ReactNode => {
    if (closeIcon) return closeIcon;

    return <img src="/assets/images/ic-close.svg" alt="" />;
  };

  return (
    <>
      <span onClick={setTrue} ref={ref}>
        {children}
      </span>

      <Dialog
        visible={visible ? visible : state}
        width={width}
        className={cls([styles.rcModal, className])}
        onClose={visible ? onClose : setFalse}
        closeIcon={renderCloseIcon()}
        {...rest}
      >
        {renderTitle()}

        {content && <div className="modal-body">{content}</div>}

        {footer && <div className="modal-footer">{footer}</div>}
      </Dialog>
    </>
  );
}

export default forwardRef(Modal);
