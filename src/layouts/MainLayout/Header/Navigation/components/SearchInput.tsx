import React from 'react';
import Form, { Field } from 'rc-field-form';
import styles from './index.less';
import { useBoolean, useClickAway } from '@umijs/hooks';
import { history, useLocation } from 'umi';
import debounce from 'lodash/debounce';

export default function SearchInput() {
  const [form] = Form.useForm();
  const location: any = useLocation();

  const { state, setTrue, setFalse } = useBoolean(false);

  const divRef: any = useClickAway(() => {
    if (state) setFalse();
  });

  const debounceSearch = debounce(async () => {
    const values = form.getFieldsValue();
    console.log('🚀 ~ values', values);

    const query: any = {
      ...location?.query,
    };

    Object.entries(values).forEach(([key, value]) => {
      if (key && value) {
        query[key] = value;
      }
    });

    history.push({
      pathname: location.pathname,
      query,
    });
  }, 800);

  return (
    <>
      {state ? (
        <div ref={divRef} className={styles.searchContainer}>
          <Form
            onFieldsChange={debounceSearch}
            className={styles.formSearch}
            form={form}
            initialValues={{ search: location?.query?.search || '' }}
          >
            <Field name="search">
              <input placeholder="Search" className={styles.searchInput} />
            </Field>
            <img
              className={styles.searchIcon}
              src="/assets/images/ic-search.svg"
            />
          </Form>
        </div>
      ) : (
        <img
          className={styles.search}
          src="/assets/images/ic-navigation-search.svg"
          onClick={setTrue}
        />
      )}
    </>
  );
}
