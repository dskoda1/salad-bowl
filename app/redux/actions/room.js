export const REFRESH_ROOM_ID = 'ROOM_REFRESH_ROOM_ID';
export const CREATE_ROOM = 'ROOM_CREATE_ROOM';
export const CREATE_ROOM_ERROR = 'ROOM_CREATE_ROOM_ERROR';
export const CREATE_ROOM_SUCCESS = 'ROOM_CREATE_ROOM_SUCCESS';

export const JOIN_ROOM = 'ROOM_JOIN_ROOM';
export const JOIN_ROOM_ERROR = 'ROOM_JOIN_ROOM_ERROR';
export const JOIN_ROOM_SUCCESS = 'ROOM_JOIN_ROOM_SUCCESS';

export const refreshRoomId = () => ({
  type: REFRESH_ROOM_ID,
});

export const createRoomAction = (roomId, userName) => ({
  type: CREATE_ROOM,
  payload: {
    roomId,
    userName,
  },
});

export const createRoomErrorAction = (error) => ({
  type: CREATE_ROOM_ERROR,
  payload: error,
});

export const createRoomSuccessAction = () => ({
  type: CREATE_ROOM_SUCCESS,
});

export const joinRoomAction = (roomId, userName) => ({
  type: JOIN_ROOM,
  payload: {
    roomId,
    userName,
  },
});

export const joinRoomErrorAction = (error) => ({
  type: JOIN_ROOM_ERROR,
  payload: error,
});

export const joinRoomSuccessAction = () => ({
  type: JOIN_ROOM_SUCCESS,
});
