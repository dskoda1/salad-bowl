import { RESET_GAME, UPDATE_GAME } from 'redux/actions/game';

const initialState = {
  state: 'new',
  // players: {},
  timerRunning: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_GAME:
      return initialState;
    case UPDATE_GAME:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
