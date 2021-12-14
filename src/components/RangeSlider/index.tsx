import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './index.less';
import Text from '../Text';
import Button from '../Button';
import { useIntl } from 'umi';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  onApply: (values: number[]) => void;
  unit?: React.ReactNode | string;
}

const RangeSlider = ({
  min,
  max,
  step = 1,
  onApply,
  unit,
}: RangeSliderProps) => {
  const intl = useIntl();
  const [rangeValues, setRangeValues] = React.useState<number[]>([min, max]);

  const handleChange = (values: number[]) => {
    setRangeValues(values);
  };

  const handleApply = () => onApply(rangeValues);

  return (
    <div className={styles.wrapper}>
      <div className={styles.rangeValues}>
        <Text type="title-1">{`${rangeValues?.[0]} - ${rangeValues?.[1]}`}</Text>
        <Text type="title-1">{unit}</Text>
      </div>

      <Range
        min={min}
        max={max}
        onChange={handleChange}
        step={step}
        defaultValue={[min, max]}
      />

      <div className={styles.values}>
        <Text type="body-7" className={styles.min}>
          {min}
        </Text>
        <Text type="body-7" className={styles.max}>
          {max}
        </Text>
      </div>

      <div className={styles.wrapBtn}>
        <Button onClick={handleApply}>
          {intl.formatMessage({ id: 'common.apply' })}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(RangeSlider);
