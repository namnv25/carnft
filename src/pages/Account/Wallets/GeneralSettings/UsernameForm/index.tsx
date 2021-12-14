import React from 'react';
import styles from '../index.less';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import Input from '@/components/Input';
import { useIntl } from 'umi';
import Button from '@/components/Button';

interface UsernameFormProps {}

const UsernameForm = (props: UsernameFormProps) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const onFinish = (values: { username: string }) => {
    console.log('🚀 ~ values', values);
  };

  return (
    <Form onFinish={onFinish} form={form} initialValues={{ username: '' }}>
      <div className={styles.wrapFormItem}>
        <FormItem
          name="username"
          rules={[
            {
              required: true,
              whitespace: true,
              message: intl.formatMessage({
                id: 'account.wallets.generalSettings.usernameRequired',
              }),
            },
          ]}
          hideError
        >
          <Input
            label={intl.formatMessage({
              id: 'account.wallets.generalSettings.username',
            })}
            placeholder={intl.formatMessage({
              id: 'account.wallets.generalSettings.usernamePlaceholder',
            })}
            className={styles.inputGs}
            maxLength={256}
          />
        </FormItem>

        <Button className={styles.btnGs} htmlType="submit">
          {intl.formatMessage({
            id: 'account.wallets.generalSettings.saveChange',
          })}
        </Button>
      </div>
    </Form>
  );
};

export default UsernameForm;
