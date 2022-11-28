import React from 'react';

import { JoinBlock } from './components';

import io from 'socket.io-client';

function App() {
  const socket = io('http://localhost:4444');

  return (
    <div className="App">
      <JoinBlock />
    </div>
  );
}

export default App;
