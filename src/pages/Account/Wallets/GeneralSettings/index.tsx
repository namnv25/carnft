import React from 'react';
import styles from './index.less';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import Input from '@/components/Input';
import { useIntl } from 'umi';
import Button from '@/components/Button';
import { isEmail, isNumber } from '@/utils/common';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import UsernameForm from './UsernameForm';
import EmailForm from './EmailForm';
import FacebookForm from './FacebookForm';

interface GeneralSettingsProps {}

export enum TypeConnect {
  EMAIL = 'Email',
  FACEBOOK = 'Facebook',
}

const GeneralSettings = (props: GeneralSettingsProps) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const [isVisibleConnect, setIsVisibleConnect] = React.useState<boolean>(
    false,
  );

  const connectRef = React.useRef<TypeConnect>();
  const isConnectEmail: boolean = connectRef.current === TypeConnect.EMAIL;

  const handleCloseConnect = () => {
    setIsVisibleConnect(false);
    form.resetFields();
  };

  const onConnect = (type: TypeConnect) => {
    connectRef.current = type;
    form.resetFields();
    setIsVisibleConnect(true);
  };

  const onConfirm = (values: any) => {
    console.log('🚀 ~ onConfrim', values);
  };

  return (
    <div className={styles.generalSettings}>
      <UsernameForm />

      <EmailForm onConnect={onConnect} />

      <FacebookForm onConnect={onConnect} />

      <Modal
        className={styles.modalConnect}
        visible={isVisibleConnect}
        onClose={handleCloseConnect}
        title={
          connectRef.current &&
          intl.formatMessage({
            id: `account.wallets.generalSettings.connect${connectRef.current}`,
          })
        }
        content={
          <div className={styles.content}>
            <Text type="body-5" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              purus ac ultricies vel eget.
            </Text>

            <Form
              onFinish={onConfirm}
              className={styles.formConfirm}
              form={form}
              initialValues={{
                email: '',
                password: '',
              }}
            >
              <FormItem
                name="email"
                rules={[
                  () => ({
                    validator(_rule: any, value: string) {
                      if (!value)
                        return Promise.reject(
                          new Error(
                            intl.formatMessage({
                              id: `account.wallets.generalSettings.email${
                                isConnectEmail ? '' : 'Phone'
                              }Required`,
                            }),
                          ),
                        );

                      const isTypingPhone: boolean = isNumber(value);

                      if (!isConnectEmail && isTypingPhone) {
                        if (value.length < 9 || value.length > 12) {
                          return Promise.reject(
                            new Error(
                              intl.formatMessage({
                                id: `account.wallets.generalSettings.phoneNotValid`,
                              }),
                            ),
                          );
                        }

                        return Promise.resolve();
                      }

                      const checkEmail: boolean = isEmail(value);

                      if (checkEmail) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          intl.formatMessage({
                            id: 'account.wallets.generalSettings.emailNotValid',
                          }),
                        ),
                      );
                    },
                  }),
                ]}
              >
                <Input
                  label={intl.formatMessage({
                    id: `account.wallets.generalSettings.email${
                      isConnectEmail ? '' : 'Phone'
                    }`,
                  })}
                  className={styles.inputEmail}
                  maxLength={256}
                />
              </FormItem>
              {!isConnectEmail && (
                <div className={styles.formItemPassword}>
                  <FormItem
                    name="password"
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: intl.formatMessage({
                          id:
                            'account.wallets.generalSettings.passwordRequired',
                        }),
                      },
                    ]}
                  >
                    <Input
                      label={intl.formatMessage({
                        id: 'account.wallets.generalSettings.password',
                      })}
                      className={styles.inputPassword}
                      maxLength={256}
                      type="password"
                    />
                  </FormItem>
                </div>
              )}

              <div className={styles.wrapBtnConfirm}>
                <Button className={styles.btnConfirm} htmlType="submit">
                  {intl.formatMessage({
                    id: 'account.wallets.generalSettings.confirm',
                  })}
                </Button>
              </div>
            </Form>
          </div>
        }
      />
    </div>
  );
};

export default React.memo(GeneralSettings);
