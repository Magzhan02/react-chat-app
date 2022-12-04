export enum ActionType {
  JOIN = 'JOIN',
  SET_USERS = 'SET_USERS',
  SET_DATA = 'SET_DATA',
  NEW_MESSAGE = 'NEW_MESSAGE',
}

export interface SocketAction {
  type: ActionType;
  payload: any;
}

export interface SocketState {
  join: boolean;
  roomId: null | string;
  userName: null | string;
  users: any[];
  messages: any[];
}

export type SocketActionObj = Omit<SocketState, 'join' | 'messages' | 'users'>;
