import Text from '@/components/Text';
import FormSort from './FormSort';
import styles from './index.less';
import Table from 'rc-table';
import '@/global/theme.less';
import { Fragment } from 'react';
import { data, mockTopPlayer } from './constants';
import CardPlayer from './CardPlayer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { translation } from '@/utils/translations';

export default function Rank() {
  const columns = [
    {
      title: translation('market.rank.table.top'),
      dataIndex: 'top',
      key: 'top',
      width: 93,
      render: (record: string, item: any, index: number) => {
        return renderTopTable(index, record);
      },
    },
    {
      title: translation('market.rank.table.clan'),
      dataIndex: 'clan',
      key: 'clan',
      width: 350,
    },
    {
      title: translation('market.rank.table.clan.owner'),
      dataIndex: 'owner',
      key: 'owner',
      width: 233,
    },
    {
      title: translation('market.rank.table.score'),
      dataIndex: 'score',
      key: 'score',
      width: 234,
    },
  ];

  const renderTopTable = (index: number, record: string) => {
    let icon = '';
    switch (index) {
      case 0:
        icon = '/assets/images/ic-gold.svg';
        break;

      // code block
      case 1:
        icon = '/assets/images/ic-siliver.svg';
        break;

      // code block
      case 2:
        icon = '/assets/images/ic-copper.svg';
        break;
      default:
        break;
    }
    return (
      <Fragment key={index}>
        {icon !== '' ? (
          <div>
            <img src={icon} alt="" />
          </div>
        ) : (
          <Text type="body-2" key={index}>
            {' '}
            {record}
          </Text>
        )}
      </Fragment>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.rank}>
      <div className={styles.topPlayer}>
        <div className={styles.heading}>
          <Text type="title-5">{translation(`market.rank.top.player`)}</Text>
          <FormSort />
        </div>
        <div className={styles.main}>
          <Slider {...settings} className={styles.silder}>
            {mockTopPlayer.map((item, index) => {
              return <CardPlayer key={`${item.id}-${index}`} item={item} />;
            })}
          </Slider>
        </div>
      </div>
      <div className={styles.topClan}>
        <div className={styles.heading}>
          <Text type="title-5" className={styles.subTitle}>
            {translation(`market.rank.top.clans`)}
          </Text>
          <Table columns={columns} data={data} className="table" />
        </div>
      </div>
    </div>
  );
}
