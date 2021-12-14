import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { translation } from '@/utils/translations';
import { memo, useState } from 'react';
import styles from './index.less';
import FormItem from '@/components/Form';
import Form from 'rc-field-form';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { optionsAsset } from '@/pages/Account/Wallets/Transfer';
import { useIsConnected } from '@/utils/hooks/connect/wallet';
interface IFooter {
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
}
const Footer = (props: IFooter) => {
  const { data } = props;
  const [form] = Form.useForm();

  const isConnected: boolean = useIsConnected();

  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [isVisibleOffer, setIsVisibleOffer] = useState<boolean>(false);
  const [isVisibleBuy, setIsVisibleBuy] = useState<boolean>(false);
  const [isVisibleFailConnect, setIsVisibleFailConnect] = useState<boolean>(
    false,
  );

  const isFail = false;

  const renderTitleOffer = () => {
    if (isFail) {
      return translation('market.marketplace.modal.title.fail');
    } else {
      if (isConfirm)
        return translation('market.marketplace.modal.title.cancel');
      return translation('market.marketplace.modal.title.offer');
    }
  };

  const renderContentSell = () => {
    if (isFail) {
      return (
        <Text type="body-5" color="neutral-0">
          {translation('market.marketplace.modal.content.fail')}
        </Text>
      );
    }

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
        <Text type="body-5" color="neutral-0">
          {translation('market.marketplace.modal.content.offer')}
        </Text>
      </Form>
    );
  };

  const onFinish = (values: any) => {
    console.log('🚀 ~ values', values);
    setIsVisibleOffer(false);
  };

  const handleConfirm = () => {
    if (!isConfirm) {
      setIsVisibleOffer(false);
      setIsConfirm(true);
    } else {
      setIsVisibleOffer(false);
      setIsConfirm(false);
    }
  };

  const renderTitleButtonSell = () => {
    if (!isConfirm) return translation('market.marketplace.button.offer');
    return translation('market.marketplace.button.cancel');
  };

  const renderTitleButtonBuy = () => {
    if (!isConfirm) return translation('market.marketplace.button.buy');

    return translation('market.marketplace.button.update');
  };

  const handleCloseFailConnect = () => {
    setIsVisibleFailConnect(false);
  };

  const handleClickBuy = () => {
    if (isConnected) {
      setIsVisibleBuy(true);
    } else {
      setIsVisibleFailConnect(true);
    }
  };

  const handleClickOffer = () => {
    if (isConnected) {
      setIsVisibleOffer(true);
    } else {
      setIsVisibleFailConnect(true);
    }
  };

  const handleVisibleConnectWallet = () => {
    console.log('🚀 ~ handleVisibleConnectWallet');
  };

  return (
    <div className={styles.footer}>
      <div className={styles.detailPrice}>
        <div className={styles.offer}>
          {isConfirm && (
            <>
              <Text
                type="body-2"
                color="neutral-100"
                className={styles.offerTitle}
              >
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
            </>
          )}
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
          visible={isVisibleOffer}
          onClose={() => setIsVisibleOffer(false)}
          className={styles.modalList}
          title={renderTitleOffer()}
          content={
            <>
              {isConfirm ? (
                <Text type="body-5" color="neutral-0">
                  {translation('market.marketplace.modal.content.cancel')}
                </Text>
              ) : (
                renderContentSell()
              )}
            </>
          }
          footer={
            <div className={styles.footerModal}>
              <Button className={styles.btnConfirm} onClick={handleConfirm}>
                {translation('market.mystery.modal.button.confirm')}
              </Button>
            </div>
          }
        />
        <Button type="secondary" onClick={handleClickOffer}>
          {renderTitleButtonSell()}
        </Button>
        <Modal
          onClose={() => setIsVisibleBuy(false)}
          className={styles.modalUnbox}
          visible={isVisibleBuy}
          title={
            <>
              {isConfirm ? (
                <Text type="title-2" color="neutral-0">
                  {translation('market.marketplace.modal.title.update')}
                </Text>
              ) : (
                <Text type="title-2" color="neutral-0">
                  {translation('market.marketplace.modal.title.buy')}
                </Text>
              )}
            </>
          }
          content={
            <>
              {isConfirm ? (
                renderContentSell()
              ) : (
                <Text type="body-5" color="neutral-0">
                  {translation('market.marketplace.modal.content.buy')}
                </Text>
              )}
            </>
          }
          footer={
            <div className={styles.footerModal}>
              <Button
                className={styles.btnConfirm}
                onClick={() => {
                  setIsVisibleBuy(false);
                }}
              >
                {translation('market.marketplace.modal.button.confirm')}
              </Button>
            </div>
          }
        />
        <Button onClick={handleClickBuy}>{renderTitleButtonBuy()}</Button>
      </div>

      <Modal
        title=""
        visible={isVisibleFailConnect}
        onClose={handleCloseFailConnect}
        content={
          <div className={styles.content}>
            <img alt="" src="/assets/images/ic-failed.png" />
            <Text type="body-5" align="center">
              Are you sure sit amet, consectetur adipiscing elit. Volutpat purus
              ac ultricies vel eget
            </Text>

            <div className={styles.wrapBtnConnect}>
              <Button
                className={styles.btnConnect}
                onClick={handleVisibleConnectWallet}
              >
                {translation('header.modal.connect.wallet')}
              </Button>
            </div>
          </div>
        }
        className={styles.modalFailConnect}
      />
    </div>
  );
};

export default memo(Footer);
