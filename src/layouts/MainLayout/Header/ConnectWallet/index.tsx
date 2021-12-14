import React from 'react';
import Button from '@/components/Button';
import './index.less';
import Modal from '@/components/Modal';
import styles from './index.less';
import { translation } from '@/utils/translations';
import Text from '@/components/Text';
import { connectMetaService } from '@/utils/hooks/connect/metamask';

interface ConnectWallet {}

const ConnectWallet = (props: ConnectWallet) => {
  return (
    <div className={styles.connectWallet}>
      <Modal
        title={translation('header.modal.connect.wallet').toUpperCase()}
        content={
          <>
            <div className={styles.content}>
              <Button
                icon={
                  <img alt="" src={`/assets/images/ic-metamask-medium.svg`} />
                }
                className={styles.btnMetaMask}
                onClick={connectMetaService}
              >
                <Text type="headline-1" color="neutral-0">
                  {translation('header.modal.footer.metamask')}
                </Text>
              </Button>
              <Button
                icon={<img src={`/assets/images/ic-wallet-medium.svg`} />}
                className={styles.btnOtherMask}
              >
                <Text type="headline-1" color="neutral-0">
                  {translation('header.modal.footer.other')}
                </Text>
              </Button>
            </div>
            <div className={styles.footer}>
              <Text
                type="body-2"
                color="neutral-0"
                className={styles.footerContent}
              >
                {translation('header.modal.footer.content')}
              </Text>
              <div className={styles.contanierFooter}>
                <Text className={styles.title} type="body-3">
                  {translation('header.modal.footer.term')}
                </Text>
                <Text type="body-2" color="neutral-0" className={styles.and}>
                  {translation('header.modal.footer.and')}
                </Text>
                <Text className={styles.title} type="body-3">
                  {translation('header.modal.footer.policy')}
                </Text>
              </div>
            </div>
          </>
        }
        className={styles.modalConnect}
      >
        <Button>{translation('header.modal.connect.wallet')}</Button>
      </Modal>
    </div>
  );
};

export default React.memo(ConnectWallet);
