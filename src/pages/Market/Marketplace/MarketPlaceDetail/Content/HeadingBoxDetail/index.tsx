import Text from '@/components/Text';
import { translation } from '@/utils/translations';
import { memo } from 'react';
import styles from './index.less';

interface IHeadingBoxDetailProps {
  isConfirm?: boolean;
  data: {
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
    acceleration: number;
    speed: number;
    handling: number;
    nitro: number;
  };
}
const isCars = true;
const HeadingBoxDetail = (props: IHeadingBoxDetailProps) => {
  const { data } = props;

  return (
    <div className={styles.headingContent}>
      <div className={styles.subTitle}>
        <Text type="headline-1">#{data?.id}</Text>
      </div>
      <div className={styles.title}>
        <Text type="title-3" color="neutral-0">
          {data?.name}
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
            <Text type="caption-2">{data?.owner.name}</Text>
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
              {data?.created.name}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {isCars ? (
          <div className={styles.listInfo}>
            <div className={styles.detailInfo}>
              <div className={styles.detailHeading}>
                <img src="/assets/images/ic-acceleration.svg" alt="" />
                <Text type="body-2">
                  {translation('account.inventory.detail.acceleration')}
                </Text>
              </div>
              <Text type="headline-2" color="neutral-0">
                {data?.acceleration} s
              </Text>
            </div>
            <div className={styles.detailInfo}>
              <div className={styles.detailHeading}>
                <img src="/assets/images/ic-top-speed.svg" alt="" />
                <Text type="body-2">
                  {translation('account.inventory.detail.topspeed')}
                </Text>
              </div>
              <Text type="headline-2" color="neutral-0">
                {data?.speed}km/h
              </Text>
            </div>
            <div className={styles.detailInfo}>
              <div className={styles.detailHeading}>
                <img src="/assets/images/ic-handling.svg" alt="" />
                <Text type="body-2">
                  {translation('account.inventory.detail.handling')}
                </Text>
              </div>
              <Text type="headline-2" color="neutral-0">
                {data?.handling}g
              </Text>
            </div>
            <div className={styles.detailInfo}>
              <div className={styles.detailHeading}>
                <img src="/assets/images/ic-nitro.svg" alt="" />
                <Text type="body-2">
                  {translation('account.inventory.detail.nitro')}
                </Text>
              </div>
              <Text type="headline-2" color="neutral-0">
                {data?.nitro}km/h
              </Text>
            </div>
          </div>
        ) : (
          <Text type="body-2" color="neutral-100">
            {data?.info}
          </Text>
        )}
      </div>
    </div>
  );
};

export default memo(HeadingBoxDetail);
