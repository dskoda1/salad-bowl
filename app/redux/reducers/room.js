import roomIdGenerator from 'services/roomIdGenerator';

import {
  CREATE_ROOM,
  REFRESH_ROOM_ID,
  CREATE_ROOM_ERROR,
  CREATE_ROOM_SUCCESS,
} from 'redux/actions/room';

const initialState = {
  id: roomIdGenerator(),
  creating: false,
  errorCreating: null,
  active: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_ROOM_ID:
      return { ...state, id: roomIdGenerator() };
    case CREATE_ROOM:
      return { ...state, creating: true, errorCreating: null, active: false };
    case CREATE_ROOM_ERROR:
      return {
        ...state,
        creating: false,
        errorCreating: action.payload,
        active: false,
      };
    case CREATE_ROOM_SUCCESS:
      return { ...state, creating: false, errorCreating: null, active: true };
    default:
      return state;
  }
};
