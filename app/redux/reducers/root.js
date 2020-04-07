import { SET_USER_ID, SET_USER_NAME } from 'redux/actions/root';

const initialState = {
  userId: null,
  userName: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
