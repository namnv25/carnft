import Text from '@/components/Text';
import { translation } from '@/utils/translations';
import React, { memo } from 'react';
import styles from './index.less';

interface IHeadingBoxDetailProps {
  id?: string | number;
  name?: string;
  owner: {
    _id: string | number;
    name: string;
  };
  created: {
    _id: string | number;
    name: string;
  };
  info: string;
}

const HeadingBoxDetail = (props: IHeadingBoxDetailProps) => {
  return (
    <div className={styles.headingContent}>
      <div className={styles.subTitle}>
        <Text type="headline-1">#{props?.id}</Text>
      </div>
      <div className={styles.title}>
        <Text type="title-3" color="neutral-0">
          {props?.name}
        </Text>
      </div>
      <div className={styles.groupInfo}>
        <div className={styles.owner}>
          <div className={styles.avatar}>
            <img src="/assets/images/ic-account-detail.svg" alt="" />
          </div>
          <div className={styles.container}>
            <Text type="caption-1" color="neutral-200">
              {translation('marketplace.mystery.detail.ownerby')}
            </Text>
            <Text type="caption-2">{props?.owner.name}</Text>
          </div>
        </div>
        <div className={styles.created}>
          <div className={styles.avatar}>
            <img src="/assets/images/ic-account-detail.svg" alt="" />
          </div>
          <div className={styles.container}>
            <Text type="caption-1" color="neutral-200">
              {translation('marketplace.mystery.detail.createdby')}
            </Text>
            <Text type="caption-2" color="neutral-0">
              {props?.created.name}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Text type="body-2" color="neutral-100">
          {props?.info}
        </Text>
      </div>
    </div>
  );
};

export default memo(HeadingBoxDetail);
