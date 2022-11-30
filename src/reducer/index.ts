export enum ActionType {
  JOIN = 'JOIN',
  SET_USERS = 'SET_USERS',
  SET_DATA = 'SET_DATA',
  NEW_MESSAGE = 'NEW_MESSAGE',
}

interface SocketAction {
  type: ActionType;
  payload: any;
}

interface SocketState {
  join: boolean;
  roomId: null | string;
  userName: null | string;
  users: any[];
  messages: any[];
}

export default (state: SocketState, action: SocketAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.JOIN:
      return {
        ...state,
        join: true,
        userName: payload.userName,
        roomId: payload.roomId,
      };
    case ActionType.NEW_MESSAGE:
      return {
        ...state,
      };
    case ActionType.SET_DATA:
      return {
        ...state,
      };
    case ActionType.SET_USERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
