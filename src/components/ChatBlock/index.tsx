import React from 'react';

import styles from './ChatBlock.module.scss';

const ChatBlock = () => {
  return (
    <div className={styles.container}>
      {/*  */}
      <div className={styles.list}>
        <h2 className={styles.room}>Room#1</h2>
        <div className={styles.users}>
          <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="ava" />
          <div className={styles.info}>
            <div className={styles.name}>
              <span>User 123</span>
              <span className={styles.last}>Last message: 12:01</span>
            </div>
          </div>
        </div>
        <div className={styles.users}>
          <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="ava" />
          <div className={styles.info}>
            <div className={styles.name}>
              <span>User 123</span>
              <span className={styles.last}>Last message: 12:01</span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={styles.chat}>
        <div className={styles.block}>
          <div className={styles.messages}>
            <div className={styles.message}>
              <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="ava" />
              <span>UserName</span>
              <p>
                TypeScript provides several utility types to facilitate common type transformations.
              </p>
            </div>
          </div>
        </div>

        <form>
          <textarea className={styles.control} rows={3}></textarea>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ChatBlock;
