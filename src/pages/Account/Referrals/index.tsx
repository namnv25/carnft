import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import styles from './index.less';
import Form, { Field } from 'rc-field-form';
import classNames from 'classnames';
import { useIntl, history } from 'umi';
import Text from '@/components/Text';
import Table from 'rc-table';
import Modal from '@/components/Modal';

interface ReferralsProps {}

const Referrals = (props: ReferralsProps) => {
  const [form] = Form.useForm();
  const intl = useIntl();

  const [isVisibleTrade, setIsVisibleTrade] = React.useState<boolean>(false);

  const handleClose = () => setIsVisibleTrade(false);

  const handleCopy = (event: React.MouseEvent) => {
    event.preventDefault();
    navigator.clipboard.writeText(form.getFieldValue('link'));
  };

  const onFinish = (values: any) => {
    console.log('🚀 ~ values', values);
    setIsVisibleTrade(true);
  };

  const columns = [
    {
      title: intl.formatMessage({ id: 'account.referrals.referralList.name' }),
      dataIndex: 'name',
      key: 'name',
      width: 286,
    },
    {
      title: intl.formatMessage({ id: 'account.referrals.referralList.ID' }),
      dataIndex: 'id',
      key: 'id',
      width: 285,
      render: (id: number) => `#${id}`,
    },
    {
      title: intl.formatMessage({ id: 'account.referrals.referralList.spot' }),
      dataIndex: 'spot',
      key: 'spot',
      width: 285,
    },
    {
      title: intl.formatMessage({
        id: 'account.referrals.referralList.status',
      }),
      dataIndex: 'status',
      key: 'status',
      width: 287,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 121,
      status: 'Completed',
    },
    {
      key: '2',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 1231,
      status: 'Completed',
    },
    {
      key: '3',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 312,
      status: 'Completed',
    },
    {
      key: '4',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 123,
      status: 'Completed',
    },
    {
      key: '5',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 12,
      status: 'Completed',
    },
    {
      key: '6',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 88,
      status: 'Completed',
    },
    {
      key: '7',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 88,
      status: 'Completed',
    },
    {
      key: '8',
      name: 'Chevrolet Corvette Stingray',
      id: +new Date(),
      spot: 88,
      status: 'Completed',
    },
  ];

  const navigateInventory = () => history.push('/account/inventory');

  return (
    <div className={styles.referrals}>
      <Form
        form={form}
        initialValues={{ trade: '99999', link: '807x79056468uxx84' }}
        onFinish={onFinish}
      >
        <div className={styles.formItem}>
          <Field name="trade">
            <Input
              disabled
              className={styles.inputTrade}
              suffix={<img alt="" src="/assets/images/ic-score.svg" />}
            />
          </Field>

          <Button htmlType="submit" className={styles.btnTrade}>
            {intl.formatMessage({ id: 'account.referrals.trade' })}
          </Button>
        </div>

        <div className={classNames(styles.formItem, styles.link)}>
          <Field name="link">
            <Input
              disabled
              label={intl.formatMessage({
                id: 'account.referrals.referralLink',
              })}
              className={styles.inputLink}
            />
          </Field>

          <Button onClick={handleCopy} className={styles.btnTrade}>
            {intl.formatMessage({ id: 'account.referrals.copy' })}
          </Button>
        </div>

        <div className={styles.list}>
          <Text type="title-4">
            {intl.formatMessage({ id: 'account.referrals.referralList' })}
          </Text>

          <Table
            columns={columns}
            data={data}
            className={classNames('table', styles.tableReferrals)}
          />
        </div>
      </Form>

      <Modal
        className={styles.modalTradeSuccess}
        visible={isVisibleTrade}
        onClose={handleClose}
        title={
          <Text type="title-4" color="secondary-100" align="center">
            {intl.formatMessage({ id: 'account.referrals.tradeSuccess' })}
          </Text>
        }
        width={676}
        content={
          <div className={styles.contentTrade}>
            <img
              alt="BNB"
              src="/assets/images/ic-bnb-xxl.png"
              className={styles.iconBnbXxl}
            />

            <div className={styles.receive}>
              <Text type="headline-1">
                {intl.formatMessage({
                  id: 'account.referrals.tradeSuccess.yourReceive',
                })}
              </Text>
              <Text type="headline-2" className={styles.toBnb}>
                0,1
              </Text>
              <img alt="BNB" src="/assets/images/ic-bnb-small.svg" />!
            </div>
          </div>
        }
        footer={
          <div className={styles.footerTrade}>
            <Button
              className={styles.btnGoInventory}
              onClick={navigateInventory}
            >
              {intl.formatMessage({
                id: 'account.referrals.tradeSuccess.goInventory',
              })}
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default React.memo(Referrals);
