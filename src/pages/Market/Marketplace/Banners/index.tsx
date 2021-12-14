import React from 'react';
import styles from './index.less';

import Slider from 'react-slick';
interface BannersProps {}

const Banners = (props: BannersProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.banners}>
      <Slider {...settings} className={styles.silder}>
        <div key={1}>
          <img
            src="/assets/images/banner-1.png"
            alt=""
            className={styles.imgBanner}
          />
        </div>
        <div key={2}>
          <img
            src="/assets/images/banner-1.png"
            alt=""
            className={styles.imgBanner}
          />
        </div>
        <div key={3}>
          <img
            src="/assets/images/banner-1.png"
            alt=""
            className={styles.imgBanner}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banners;
