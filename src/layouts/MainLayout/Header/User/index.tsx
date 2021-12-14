import React from 'react';
import styles from './index.less';

interface UserInfoProps {
  src?: string;
  title?: string;
  alt?: string;
}

const UserInfo = (props: UserInfoProps) => {
  const { src, title, alt, ...rest } = props;

  return (
    <div className={styles.user} {...rest}>
      <img src={src} alt={alt} className={styles.avatar} />
      {/* //{' '}
      <div className={styles.userAvatar}>
        // {src && <img src={src} alt={alt} className={styles.avatar} />}
        //{' '}
      </div>
      // <div className={styles.userTitle}>{title}</div> */}
    </div>
  );
};

export default React.memo(UserInfo);
