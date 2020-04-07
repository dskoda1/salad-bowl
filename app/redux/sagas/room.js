import { store } from '../../store';
import { database, databaseServerTimestamp } from 'services/firebase';
import { put } from 'redux-saga/effects';
import { setUserName } from '../actions/root';
import {
  createRoomErrorAction,
  createRoomSuccessAction,
  refreshRoomId,
} from '../actions/room';
import nav from 'utils/nav';
import { showError } from '../../utils/toast';

const createRoomSaga = function* ({ payload: { userName, roomId } }) {
  // Save the username first
  yield put(setUserName(userName));

  // Now lets try to write to firebase
  const state = store.getState();

  const newRoom = {
    ...state.config,
    ...state.game,
    owner: state.root.userId,
    updatedAt: databaseServerTimestamp,
  };

  // TODO: Delete the old room from firebase, if its active

  try {
    yield database.ref(`rooms`).update({
      [roomId]: newRoom,
    });
  } catch (err) {
    // Refresh the room id in the off chance that the random ID is duplicated
    yield put(refreshRoomId());
    // This action doesn't actually do anything directly, but can allow the component to display an error
    yield put(createRoomErrorAction(err));
    // Show the error telling the user to retry
    showError('Failed to create room. Please try again.', err);
    return;
  }

  yield put(createRoomSuccessAction());
};

export { createRoomSaga };
