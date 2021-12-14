import React from 'react';
import Assets from '../Assets';
import styles from './index.less';

interface InGameProps {}

const InGame = (props: InGameProps) => {
  return (
    <div className={styles.ingame}>
      <div className={styles.boxAssets}>
        <Assets quantity={120} type="RMP" />
        <Assets quantity={120} type="RMO" />
      </div>
      <div className={styles.boxAssets}>
        <Assets quantity={120} type="CARS" />
        <Assets quantity={120} type="MAPS" />
        <Assets quantity={120} type="GEARS" />
      </div>
    </div>
  );
};

export default React.memo(InGame);
