import React from 'react';
import styles from '../index.less';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import Input from '@/components/Input';
import { useIntl } from 'umi';
import Button from '@/components/Button';
import { TypeConnect } from '..';

interface FacebookFormProps {
  onConnect: (type: TypeConnect) => void;
}

const FacebookForm = ({ onConnect }: FacebookFormProps) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const onFinish = (values: { facebook: string }) => {
    console.log('🚀 ~ values', values);
  };
  return (
    <Form onFinish={onFinish} form={form} initialValues={{ facebook: '' }}>
      <div className={styles.wrapFormItem}>
        <FormItem name="facebook" hideError>
          <Input
            label={intl.formatMessage({
              id: 'account.wallets.generalSettings.facebook',
            })}
            className={styles.inputGs}
            maxLength={256}
            disabled
          />
        </FormItem>

        <FormItem shouldUpdate={(p: any, n: any) => p.facebok !== n.facebok}>
          {() => {
            const hasValue: boolean = !!form.getFieldValue('facebook');

            return (
              <Button
                className={styles.btnGs}
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault();
                  onConnect(TypeConnect.FACEBOOK);
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

export default FacebookForm;
