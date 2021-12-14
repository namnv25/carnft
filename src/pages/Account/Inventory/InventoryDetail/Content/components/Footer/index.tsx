import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { translation } from '@/utils/translations';
import { memo, useState } from 'react';
import styles from './index.less';
import FormItem from '@/components/Form';
import Form from 'rc-field-form';
import { TabInventory } from '@/pages/Account/Inventory';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Radio from '@/components/Radio';
import { optionsAsset } from '@/pages/Account/Wallets/Transfer';
import { history } from 'umi';

interface IFooter {
  type?: string;
  data: {
    time: Date | string;
    sourceUrl: string;
    id: string;
    name: string;
    owner: {
      _id: string;
      name: string;
    };
    created: {
      _id: string;
      name: string;
    };
    info: string;
    price: number;
    coinPrice: number;
    imageCoinPrice: string;
  };
  isCar: boolean;
}

const Footer = (props: IFooter) => {
  const { data, type, isCar } = props;
  const [form] = Form.useForm();

  const [isVisibleSell, setIsVisibleSell] = useState<boolean>(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const renderChildrenButton = () => {
    if (type === TabInventory.WALLET) {
      return translation('account.inventory.button.sell');
    } else if (type === TabInventory.MARKETPLACE) {
      return translation('account.inventory.button.delist');
    } else {
      return translation('account.inventory.button.deposit');
    }
  };

  const renderContent = () => {
    return (
      <Form
        form={form}
        onFinish={onFinish}
        className={styles.form}
        initialValues={{ asset: 'BNB', amount: '' }}
      >
        <div className={styles.formItem}>
          <FormItem name="amount">
            <Input
              type="number"
              min={0}
              max={9999}
              className={styles.amount}
              label={translation('account.transfer.amount')}
              placeholder="0"
            />
          </FormItem>
          <div className={styles.asset}>
            <Text type="body-7" color="neutral-200" className={styles.label}>
              {translation('account.transfer.asset')}
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

        <FormItem name="fixedsaaa">
          <Radio
            label="Fixed price"
            value="fixed"
            className={styles.wrapRadio}
          />
        </FormItem>

        <Text type="body-5" color="neutral-0" className={styles.txtInfo}>
          {translation('market.mysterydetail.modal.content.list')}
        </Text>
      </Form>
    );
  };
  const onFinish = (values: any) => {
    console.log('🚀 ~ values', values);
    setIsVisibleSell(false);
  };
  const onClose = () => {
    setIsVisibleSell(false);
  };
  const handleChangeContent = () => {
    if (!isConfirm) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
      setIsVisibleSell(false);
    }
  };

  const handleShowPopupSell = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsVisibleSell(true);
  };

  const renderType = () => {
    if (
      (type && type === TabInventory.MARKETPLACE) ||
      (isCar == false && type === TabInventory.WALLET)
    )
      return 'secondary';
  };

  const navigateInventory = () => history.push('/account/inventory');

  return (
    <div className={styles.footer}>
      <div className={styles.detailPrice}>
        <div className={styles.offer}>
          <Text type="body-2" color="neutral-100" className={styles.offerTitle}>
            {translation(`market.mystery.detail.offer`)}
          </Text>

          <Text
            type="body-4"
            color="neutral-0"
            className={styles.offerCoinPrice}
          >
            {data.price}
          </Text>
          <img
            src="/assets/images/ic-bnb-small.svg"
            alt=""
            className={styles.solana}
          />
        </div>

        <div className={styles.price}>
          <Text
            type="title-1"
            color="neutral-200"
            className={styles.priceTitle}
          >
            ${data.price}
          </Text>
          <Text type="title-5">{data.coinPrice}</Text>
          <img src={data.imageCoinPrice} alt="" className={styles.solana} />
        </div>
      </div>

      <div className={styles.groupButton}>
        <Modal
          visible={isVisibleSell}
          onClose={onClose}
          className={styles.modalOffer}
          title={translation('account.inventory.modal.sell')}
          content={
            !isConfirm ? (
              <Text type="body-5" color="neutral-0">
                {translation('market.mystery.modal.content.sell')}
              </Text>
            ) : (
              renderContent()
            )
          }
          footer={
            <div className={styles.footerModal}>
              <Button
                className={styles.btnConfirm}
                onClick={handleChangeContent}
              >
                {translation('market.mystery.modal.button.confirm')}
              </Button>
            </div>
          }
        />
        <Button
          type={renderType()}
          onClick={
            type && type === TabInventory.WALLET
              ? handleShowPopupSell
              : undefined
          }
        >
          {renderChildrenButton()}
        </Button>
        {!isCar && type === TabInventory.WALLET && (
          <Modal
            className={styles.modalUnbox}
            title={
              <Text type="title-2" color="secondary-100">
                {translation('market.mysterydetail.modal.unbox')}
              </Text>
            }
            content={
              <div className={styles.contentUnbox}>
                <div className={styles.imageRevice}>
                  <img src="/assets/images/ic-car-revice.svg" alt="" />
                </div>
                <div className={styles.content}>
                  <Text type="headline-1" color="neutral-0">
                    {translation('market.mystery.modal.content.reviced')}
                  </Text>
                  <Text
                    type="headline-2"
                    color="neutral-0"
                    className={styles.nameCar}
                  >
                    Astonmartin 5
                  </Text>
                  !
                </div>
              </div>
            }
            footer={
              <div className={styles.footerModal}>
                <Button
                  className={styles.btnConfirm}
                  onClick={navigateInventory}
                >
                  {translation('market.mystery.modal.button.inventory')}
                </Button>
              </div>
            }
          >
            <Button>{translation('market.mysterydetail.unbox')}</Button>
          </Modal>
        )}
        {type && type !== TabInventory.WALLET && type !== TabInventory.INGAME && (
          <>
            <Button
              onClick={
                type && type === TabInventory.WALLET
                  ? handleShowPopupSell
                  : undefined
              }
            >
              {type === TabInventory.MARKETPLACE
                ? translation('account.inventory.button.accept')
                : translation('account.inventory.modal.buy')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Footer);
