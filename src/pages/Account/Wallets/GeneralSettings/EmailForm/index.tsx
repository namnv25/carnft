import React from 'react';
import styles from '../index.less';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import Input from '@/components/Input';
import { useIntl } from 'umi';
import Button from '@/components/Button';
import { TypeConnect } from '..';

interface EmailFormProps {
  onConnect: (type: TypeConnect) => void;
}

const EmailForm = ({ onConnect }: EmailFormProps) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const onFinish = (values: { username: string }) => {
    console.log('🚀 ~ values', values);
  };
  return (
    <Form onFinish={onFinish} form={form} initialValues={{ email: '' }}>
      <div className={styles.wrapFormItem}>
        <FormItem name="email">
          <Input
            label={intl.formatMessage({
              id: 'account.wallets.generalSettings.email',
            })}
            className={styles.inputGs}
            maxLength={256}
            disabled
          />
        </FormItem>

        <FormItem shouldUpdate={(p: any, n: any) => p.email !== n.email}>
          {() => {
            const hasValue: boolean = !!form.getFieldValue('email');

            return (
              <Button
                className={styles.btnGs}
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault();
                  onConnect(TypeConnect.EMAIL);
                }}
              >
                {intl.formatMessage({
                  id: `account.wallets.generalSettings.${
                    hasValue ? 'change' : 'connect'
                  }`,
                })}
              </Button>
            );
          }}
        </FormItem>
      </div>
    </Form>
  );
};

export default EmailForm;
