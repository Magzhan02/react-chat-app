import React from 'react';

import axios from 'axios';

import socket from './socket';
import { ActionType, SocketActionObj, MessageType } from './types/reducerType';
import reducer from './reducer';

import { JoinBlock, ChatBlock } from './components';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    join: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const setJoinData = async (obj: SocketActionObj) => {
    dispatch({
      type: ActionType.JOIN,
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);

    const { data } = await axios.get(`/rooms/${obj.roomId}`);

    dispatch({
      type: ActionType.SET_DATA,
      payload: data,
    });
  };

  const setUsers = (users: any[]) => {
    dispatch({
      type: ActionType.SET_USERS,
      payload: users,
    });
  };

  const setMessages = (obj: MessageType) => {
    dispatch({
      type: ActionType.NEW_MESSAGE,
      payload: obj,
    });
  };

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', setMessages);
  }, []);

  return (
    <div className="App">
      {state.join ? (
        <ChatBlock {...state} setMessages={setMessages} />
      ) : (
        <JoinBlock setJoinData={setJoinData} />
      )}
    </div>
  );
};

export default App;
