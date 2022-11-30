import React from 'react';
import axios from 'axios';

import styles from './JoinBlock.module.scss';

const JoinBlock = () => {
  const [roomId, setRoomId] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');

  const onSubmit = async () => {
    if (roomId && userName) {
      await axios.post('/rooms', {
        roomId,
        userName,
      });

      const obj = {
        roomId,
        userName,
      };
    } else {
      console.log('error');
    }
  };

  return (
    <div className={styles.wrapp}>
      <div className={styles.card}>
        <div className={styles.room}>
          <input
            value={roomId}
            type="text"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
          />
        </div>
        <div className={styles.name}>
          <input
            value={userName}
            type="text"
            placeholder="USER NAME"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button onClick={onSubmit}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default JoinBlock;
