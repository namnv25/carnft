import Text from '@/components/Text';
import { Timer } from '@/components/Timer';
import { memo } from 'react';
import Footer from './Footer';
import HeadingBoxDetail from './HeadingBoxDetail';
import styles from './index.less';

interface IContentMysterDetailProps {
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

const ContentMysteryDetail = (props: IContentMysterDetailProps) => {
  const { data } = props;

  return (
    <div className={styles.contentMystery}>
      <div className={styles.detailBox}>
        <div className={styles.timeCountDown}>
          <Timer initialMinute={120} initialSeconds={60} />
        </div>
        <img
          src="/assets/images/ic-box-detail.svg"
          alt=""
          className={styles.boxItem}
        />
      </div>
      <div className={styles.detailContent}>
        <HeadingBoxDetail
          id={data.id}
          owner={data.owner}
          created={data.created}
          info={data.info}
          name={data.name}
        />
        <Footer data={data} />
      </div>
    </div>
  );
};
export default memo(ContentMysteryDetail);
