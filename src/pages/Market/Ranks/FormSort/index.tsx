import React from 'react';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import RCSelect from '@/components/Select';
import styles from './index.less';
import { translation } from '@/utils/translations';
import { optionsAsset } from '@/pages/Account/Wallets/Transfer';

export default function FormSort() {
  const handleSubmit = (values: any) => {
    console.log('values ---> ', values);
  };

  return (
    <Form
      onFinish={handleSubmit}
      className={styles.form}
      initialValues={{ sort: 'BNB' }}
    >
      <FormItem name="sort">
        <RCSelect
          placeholder={translation('market.rank.form.sortby')}
          className={styles.sort}
          options={optionsAsset}
        />
      </FormItem>
    </Form>
  );
}
