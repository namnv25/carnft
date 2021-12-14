import Text from '@/components/Text';
import React from 'react';
import styles from './index.less';
import { history, useIntl, useLocation } from 'umi';
import classNames from 'classnames';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import Input from '@/components/Input';
import Select, { OptionSelect } from '@/components/Select';
import Button from '@/components/Button';
import { useWalletInfo } from '@/utils/hooks/connect/wallet';

interface TransferProps {}

enum TypeTransfer {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export const optionsAsset: OptionSelect[] = [
  {
    label: 'BNB',
    value: 'BNB',
    icon: <img alt="" src="/assets/images/ic-bnb-small.svg" />,
  },
];

const Transfer = (props: TransferProps) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const walletInfo = useWalletInfo();

  const page: string =
    pathname.split('/').slice(-1).pop() || TypeTransfer.DEPOSIT;

  const isDeposit: boolean = page === TypeTransfer.DEPOSIT;

  const onFinish = (values: any) => {
    console.log('🚀 ~ values', values);
  };

  const onBack = () => history.goBack();

  const classesFromTo: string = classNames(styles.fromTo, {
    [styles.reverseFrom]: !isDeposit,
  });

  return (
    <div className={styles.transfer}>
      <div className={styles.header}>
        <img
          alt=""
          src="/assets/images/ic-arrow-left.svg"
          className={styles.iconBack}
          onClick={onBack}
        />
        <Text type="title-3" className={styles.txt}>
          {intl.formatMessage({
            id: `account.wallets.wallet.${
              isDeposit ? TypeTransfer.DEPOSIT : TypeTransfer.WITHDRAW
            }`,
          })}
        </Text>
      </div>

      <div className={classesFromTo}>
        <div className={classNames(styles.box, styles.metamask)}>
          <img alt="MetaMask" src="/assets/images/ic-metamask-xl.svg" />
          <div className={styles.infoMetamask}>
            <Text type="body-2">MetaMask</Text>
            <Text type="body-1" color="neutral-200">
              {walletInfo.formattedAddress}
            </Text>
          </div>
        </div>
        <img alt="" src="/assets/images/ic-arrow-right.svg" />
        <div className={classNames(styles.box, styles.raceMaster)}>
          <img alt="Race Master" src="/assets/images/ic-logo-sm.svg" />
          <Text type="body-2">Race Master</Text>
        </div>
      </div>

      <Form
        form={form}
        onFinish={onFinish}
        className={styles.formTransfer}
        initialValues={{ asset: 'BNB', amount: '' }}
      >
        <div className={styles.formItem}>
          <FormItem name="amount">
            <Input
              type="number"
              min={0}
              max={9999}
              className={styles.amount}
              label={intl.formatMessage({ id: 'account.transfer.amount' })}
              placeholder="0"
            />
          </FormItem>
          <div className={styles.asset}>
            <Text type="body-7" color="neutral-200" className={styles.label}>
              {intl.formatMessage({ id: 'account.transfer.asset' })}
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

        <Button htmlType="submit" className={styles.btnNext}>
          {intl.formatMessage({ id: 'account.transfer.next' })}
        </Button>
      </Form>
    </div>
  );
};

export default Transfer;
