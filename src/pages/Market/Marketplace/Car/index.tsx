import React from 'react';
import styles from './index.less';
import { useIntl } from 'umi';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { history, useLocation } from 'umi';
interface CarProps {
  isSell?: boolean;
  onSell?: () => void;
  hidePrice?: boolean;
  type?: string;
}

const Car = ({ isSell = false, onSell, hidePrice = false, type }: CarProps) => {
  const intl = useIntl();
  const location = useLocation();

  const onClickSell = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isSell && onSell) {
      onSell();
    }
  };

  let id = 3131;

  const handleClickDetail = () => {
    history.push({
      pathname: `${location.pathname}/${id}`,
      state: { type },
    });
  };

  return (
    <div className={styles.boxCar} onClick={handleClickDetail}>
      <div className={styles.featured}>
        <Text type="body-6">
          {intl.formatMessage({ id: 'market.marketplace.car.featured' })}
        </Text>
      </div>
      <div className={styles.count}>
        <Text type="body-5">00 : 00 : 00 : 00</Text>
      </div>

      <img alt="Car" src="/assets/images/car.png" className={styles.carImage} />

      <div className={styles.carInfo}>
        <Text
          type="body-2"
          color="secondary-400"
          className={styles.sequence}
          align="right"
        >
          #658461
        </Text>

        <Text type="headline-2" align="right" className={styles.name}>
          Astonmartin
        </Text>

        <div className={styles.gears}>
          <Text type="body-6">
            <img
              alt="acceleration"
              src="/assets/images/ic-acceleration.svg"
              className={styles.gearIcon}
            />
            14.5s
          </Text>
          <Text type="body-6">
            <img
              alt="top-speed"
              src="/assets/images/ic-top-speed.svg"
              className={styles.gearIcon}
            />
            405.6 km/h
          </Text>
          <Text type="body-6">
            <img
              alt="handling"
              src="/assets/images/ic-handling.svg"
              className={styles.gearIcon}
            />
            1.31g
          </Text>
          <Text type="body-6">
            <img
              alt="nitro"
              src="/assets/images/ic-nitro.svg"
              className={styles.gearIcon}
            />
            11.2 km/h
          </Text>
        </div>

        {!hidePrice && (
          <div className={styles.prices}>
            {isSell ? (
              <Button onClick={onClickSell}>
                {intl.formatMessage({ id: 'market.marketplace.car.sell' })}
              </Button>
            ) : (
              <>
                <Text type="body-3" color="neutral-200">
                  $2.200
                </Text>
                <Text type="title-4">10</Text>
                <img alt="" src="/assets/images/ic-bnb-medium.svg" />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Car);
