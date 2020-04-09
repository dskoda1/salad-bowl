import { SET_USER_ID, SET_USER_NAME, APPEND_NOUNS } from 'redux/actions/root';

const initialState = {
  userId: null,
  userName: null,
  nouns: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    case APPEND_NOUNS:
      return { ...state, nouns: initialState.nouns.push(action.payload) };
    default:
      return state;
  }
};
