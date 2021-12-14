import React from 'react';
import Form, { Field } from 'rc-field-form';
import styles from './index.less';

const Search = () => {
  const [form] = Form.useForm();

  return (
    <Form
      onFinish={(values) => {
        console.log('Finish:', values);
      }}
      className={styles.formSearch}
      form={form}
    >
      <Field name="search">
        <input placeholder="Search" className={styles.searchInput} />
      </Field>
      <img
        src="/assets/images/ic-search-input.svg"
        className={styles.searchIcon}
      />
    </Form>
  );
};

export default React.memo(Search);
