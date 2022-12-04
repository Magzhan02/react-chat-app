import { SocketState, SocketAction, ActionType } from '../types/reducerType';

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
        messages: [...state.messages, action.payload],
      };
    case ActionType.SET_DATA:
      return {
        ...state,
        users: payload.users,
        messages: payload.messages,
      };
    case ActionType.SET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
