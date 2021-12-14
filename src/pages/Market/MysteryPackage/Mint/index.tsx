import styles from './index.less';
import Text from '@/components/Text';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import Select from '@/components/Select';
import Button from '@/components/Button';
import { translation } from '@/utils/translations';
import Input from '@/components/Input';
import { useSaleCountdown } from '@/utils/hooks/sale';
import dayjs from 'dayjs';
import { optionsAsset } from '@/pages/Account/Wallets/Transfer';

interface IMintProps {}

export default function MintMystery(props: IMintProps) {
  const { remain } = useSaleCountdown({
    startDate: new Date(),
    endDate: dayjs(new Date()).add(1, 'year').toDate(),
  });

  const onFinish = (values: any) => {
    console.log('🚀 ~ values', values);
  };

  return (
    <div className={styles.mintMystery}>
      <div className={styles.contentTime}>
        <div className={styles.box}>
          <div className={styles.countdown}>
            <Text type="title-5" className={styles.timeCountDown}>
              {remain.days}
            </Text>
          </div>
          <div className={styles.countdown}>
            <Text type="headline-1">
              {translation('marketplace.mystery.mint.days')}
            </Text>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.countdown}>
            <Text type="title-5" className={styles.timeCountDown}>
              {remain.hours}
            </Text>
          </div>
          <div className={styles.countdown}>
            <Text type="headline-1">
              {translation('marketplace.mystery.mint.hours')}
            </Text>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.countdown}>
            <Text type="title-5" className={styles.timeCountDown}>
              {remain.minutes}
            </Text>
          </div>
          <div className={styles.countdown}>
            <Text type="headline-1">
              {translation('marketplace.mystery.mint.minutes')}
            </Text>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.countdown}>
            <Text type="title-5" className={styles.timeCountDown}>
              {remain.seconds}
            </Text>
          </div>
          <div className={styles.countdown}>
            <Text type="headline-1">
              {translation('marketplace.mystery.mint.seconds')}
            </Text>
          </div>
        </div>
      </div>

      <Form
        className={styles.form}
        initialValues={{ asset: 'BNB', amount: '', quantity: '' }}
        onFinish={onFinish}
      >
        <FormItem name="quantity">
          <Input
            label={translation('marketplace.mystery.mint.quantity')}
            placeholder={translation('marketplace.mystery.min.placeholder')}
            className={styles.inputQuantity}
          />
        </FormItem>

        <div className={styles.formItem}>
          <FormItem name="amount">
            <Input
              type="number"
              min={0}
              max={9999}
              className={styles.amount}
              label={translation('account.transfer.amount')}
              placeholder="0"
            />
          </FormItem>

          <div className={styles.asset}>
            <Text type="body-7" color="neutral-200" className={styles.label}>
              {translation('account.transfer.asset')}
            </Text>
            <FormItem name="asset">
              <Select
                options={optionsAsset}
                className={styles.selectAsset}
                direction="rtl"
              />
            </FormItem>
          </div>
        </div>

        <div className={styles.formButton}>
          <Button className={styles.btnMint} htmlType="submit">
            {translation('marketplace.mystery.mint.button')}
          </Button>
        </div>
      </Form>
    </div>
  );
}
