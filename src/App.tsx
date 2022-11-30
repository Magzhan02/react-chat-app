import React from 'react';

import reducer from './reducer';

import { JoinBlock } from './components';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    join: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  return (
    <div className="App">
      <JoinBlock />
    </div>
  );
}

export default App;
