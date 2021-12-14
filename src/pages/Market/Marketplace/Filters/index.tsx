import React from 'react';
import styles from './index.less';
import Select, { OptionSelect } from '@/components/Select';
import Checkbox from '@/components/Checkbox';
import { useIntl, history, useLocation } from 'umi';
import Form from 'rc-field-form';
import FormItem from '@/components/Form';
import { useRequest } from '@umijs/hooks';
import debounce from 'lodash/debounce';
import RangeSlider from '@/components/RangeSlider';
import { useIsConnected } from '@/utils/hooks/connect/wallet';

interface FiltersProps {
  hidePrice?: boolean;
  hideAllCheckboxes?: boolean;
  hideSortBy?: boolean;
}

const Filters = ({
  hidePrice = false,
  hideAllCheckboxes = false,
  hideSortBy = false,
}: FiltersProps) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const location: any = useLocation();
  const isConnected: boolean = useIsConnected();

  const { run } = useRequest(
    async () => {
      // query
    },
    { refreshDeps: [] },
  );

  const optionsCategories: OptionSelect[] = [
    {
      label: intl.formatMessage({ id: 'market.marketplace.filters.all' }),
      value: 'all',
    },
    {
      label: intl.formatMessage({ id: 'market.marketplace.filters.car' }),
      value: 'car',
    },
  ];

  const optionsBrand: OptionSelect[] = [
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.brand.astomantin',
      }),
      value: 'astomantin',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.brand.audi',
      }),
      value: 'audi',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.brand.chevrolet',
      }),
      value: 'chevrolet',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.brand.ferrari',
      }),
      value: 'ferrari',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.brand.ford',
      }),
      value: 'ford',
    },
  ];

  const optionsRarely: OptionSelect[] = [
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.rarely.deluxe',
      }),
      value: 'deluxe',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.rarely.luxury',
      }),
      value: 'luxury',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.rarely.premium',
      }),
      value: 'premium',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.rarely.hyper',
      }),
      value: 'hyper',
    },
  ];

  const optionsSort: OptionSelect[] = [
    {
      label: intl.formatMessage({ id: 'market.marketplace.filters.sold' }),
      value: 'sold',
    },
    {
      label: intl.formatMessage({ id: 'market.marketplace.filters.list' }),
      value: 'list',
    },
    {
      label: intl.formatMessage({ id: 'market.marketplace.filters.offer' }),
      value: 'offer',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.highestPrice',
      }),
      value: 'highestPrice',
    },
    {
      label: intl.formatMessage({
        id: 'market.marketplace.filters.lowestPrice',
      }),
      value: 'lowestPrice',
    },
  ];

  const debounceFilters = React.useRef(
    debounce(async () => {
      const values = form.getFieldsValue();

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
    }, 250),
  );

  React.useEffect(() => {
    if (location?.query) {
      const newFilers: any = {};

      const listCheckboxs: string[] = [
        'fixedPrice',
        'auction',
        'listing',
        'offer',
      ];

      Object.entries(location.query).forEach(
        ([key, value]: [string, unknown]) => {
          if (key && value !== 'undefined') {
            const isChecbox: boolean = listCheckboxs.includes(key);

            newFilers[key] = isChecbox ? value === 'true' : value;
          }
        },
      );

      form.setFieldsValue(newFilers);
    }
  }, []);

  const handleAppySlider = (key: string, range: number[]) => {
    form.setFieldsValue({ [key]: range.join('-') });
    form.submit();
  };

  return (
    <div className={styles.filters}>
      <Form
        form={form}
        className={styles.form}
        onFieldsChange={debounceFilters.current}
      >
        <div className={styles.wrapFormItem}>
          <div className={styles.formItemLeft}>
            <div className={styles.formSelect}>
              <FormItem name="category">
                <Select
                  options={optionsCategories}
                  placeholder={intl.formatMessage({
                    id: 'market.marketplace.filters.allCategories',
                  })}
                />
              </FormItem>

              {!hidePrice && (
                <FormItem name="price">
                  <Select
                    options={[]}
                    placeholder={intl.formatMessage({
                      id: 'market.marketplace.filters.price',
                    })}
                    className={styles.price}
                    dropdownRender={() => (
                      <RangeSlider
                        min={0}
                        max={99}
                        step={0.1}
                        onApply={(range: number[]) =>
                          handleAppySlider('price', range)
                        }
                        unit={
                          <img alt="BNB" src="/assets/images/ic-BNB-lg.svg" />
                        }
                      />
                    )}
                  />
                </FormItem>
              )}

              <FormItem
                dependencies={['category']}
                shouldUpdate={(p: any, n: any) => p.category !== n.category}
              >
                {() => {
                  const category: string = form.getFieldValue('category');

                  if (!category || category === 'all') {
                    return null;
                  }

                  return (
                    <div className={styles.formSelect}>
                      <FormItem name="brand">
                        <Select
                          options={optionsBrand}
                          placeholder={intl.formatMessage({
                            id: 'market.marketplace.filters.brand',
                          })}
                          className={styles.brand}
                        />
                      </FormItem>
                      <FormItem name="rarely">
                        <Select
                          options={optionsRarely}
                          placeholder={intl.formatMessage({
                            id: 'market.marketplace.filters.rarely',
                          })}
                        />
                      </FormItem>
                      <FormItem name="acceleration">
                        <Select
                          placeholder={intl.formatMessage({
                            id: 'market.marketplace.filters.acceleration',
                          })}
                          dropdownRender={() => (
                            <RangeSlider
                              min={0}
                              max={20}
                              step={1}
                              onApply={(range: number[]) =>
                                handleAppySlider('acceleration', range)
                              }
                              unit="s"
                            />
                          )}
                          className={styles.acceleration}
                        />
                      </FormItem>
                      <FormItem name="topSpeed">
                        <Select
                          placeholder={intl.formatMessage({
                            id: 'market.marketplace.filters.topSpeed',
                          })}
                          className={styles.topSpeed}
                          dropdownRender={() => (
                            <RangeSlider
                              min={0}
                              max={500}
                              step={1}
                              onApply={(range: number[]) =>
                                handleAppySlider('topSpeed', range)
                              }
                              unit="km/h"
                            />
                          )}
                        />
                      </FormItem>
                      <FormItem name="handling">
                        <Select
                          placeholder={intl.formatMessage({
                            id: 'market.marketplace.filters.handling',
                          })}
                          dropdownRender={() => (
                            <RangeSlider
                              min={0}
                              max={2}
                              step={0.1}
                              onApply={(range: number[]) =>
                                handleAppySlider('handling', range)
                              }
                              unit="g"
                            />
                          )}
                        />
                      </FormItem>
                      <FormItem name="nitro">
                        <Select
                          placeholder={intl.formatMessage({
                            id: 'market.marketplace.filters.nitro',
                          })}
                          className={styles.nitro}
                          dropdownRender={() => (
                            <RangeSlider
                              min={0}
                              max={15}
                              step={1}
                              onApply={(range: number[]) =>
                                handleAppySlider('nitro', range)
                              }
                              unit="km/h"
                            />
                          )}
                        />
                      </FormItem>
                    </div>
                  );
                }}
              </FormItem>
            </div>

            {!hideAllCheckboxes && (
              <div className={styles.wrapCheckbox}>
                <FormItem name="fixedPrice" valuePropName="checked">
                  <Checkbox
                    label={intl.formatMessage({
                      id: 'market.marketplace.filters.fixPrice',
                    })}
                  />
                </FormItem>
                <FormItem name="auction" valuePropName="checked">
                  <Checkbox
                    label={intl.formatMessage({
                      id: 'market.marketplace.filters.auction',
                    })}
                  />
                </FormItem>
              </div>
            )}
          </div>

          <div className={styles.formItemRight}>
            {!hideSortBy && (
              <FormItem name="sort">
                <Select
                  options={optionsSort}
                  placeholder={intl.formatMessage({
                    id: 'market.marketplace.filters.sortBy',
                  })}
                  className={styles.sortBySelect}
                />
              </FormItem>
            )}

            {isConnected && !hideAllCheckboxes && (
              <div className={styles.wrapCheckbox}>
                <FormItem name="listing" valuePropName="checked">
                  <Checkbox
                    label={intl.formatMessage({
                      id: 'market.marketplace.filters.myListing',
                    })}
                  />
                </FormItem>
                <FormItem name="offer" valuePropName="checked">
                  <Checkbox
                    label={intl.formatMessage({
                      id: 'market.marketplace.filters.myOffer',
                    })}
                  />
                </FormItem>
              </div>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default React.memo(Filters);
