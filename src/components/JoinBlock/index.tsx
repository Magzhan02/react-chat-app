import React from 'react';

import styles from './JoinBlock.module.scss';

const JoinBlock = () => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.card}>
        <div className={styles.room}>
          <input type="text" placeholder="ROOM ID" />
        </div>
        <div className={styles.name}>
          <input type="text" placeholder="USER NAME" />
        </div>
        <div className={styles.btn}>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default JoinBlock;
