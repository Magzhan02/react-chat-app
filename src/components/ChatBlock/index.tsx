import React from 'react';

import socket from '../../socket';
import styles from './ChatBlock.module.scss';

import { SocketState, MessageType } from '../../types/reducerType';

interface ChatBlockProps extends SocketState {
  setMessages: (obj: MessageType) => void;
}

const ChatBlock: React.FC<ChatBlockProps> = ({
  roomId,
  userName,
  users,
  messages,
  setMessages,
}) => {
  const [messageVal, setMessagesVal] = React.useState<string>('');
  const newMessageRef = React.useRef<HTMLInputElement>(null);

  const onSubmitMsg = () => {
    if (messageVal.length < 1) return;

    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageVal,
    });

    setMessages({ userName, text: messageVal });
    setMessagesVal('');
  };

  React.useEffect(() => {
    if (newMessageRef.current) {
      newMessageRef.current.scrollTo(0, 99999);
    }
  }, [messages]);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h2 className={styles.room}>{roomId}</h2>
        {users.map((users, i) => (
          <div className={styles.users} key={users + i}>
            <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="ava" />
            <div className={styles.info}>
              <div className={styles.name}>
                <span>{users}</span>
                <span className={styles.last}>{`${users} is online`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.chat}>
        <div className={styles.block} ref={newMessageRef}>
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div
                className={userName === msg.userName ? styles.active : styles.message}
                key={msg + i}>
                <img
                  src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                  alt="ava"
                />
                <span>{userName === msg.userName ? 'You' : msg.userName}</span>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
        <form>
          <textarea
            className={styles.control}
            rows={3}
            value={messageVal}
            onChange={(e) => setMessagesVal(e.target.value)}></textarea>
          <button onClick={onSubmitMsg} type="button">
            <img src="./icon.svg" alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBlock;
