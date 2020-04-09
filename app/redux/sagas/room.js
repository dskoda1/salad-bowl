import { store } from '../../store';
import { database, databaseServerTimestamp } from 'services/firebase';
import { put } from 'redux-saga/effects';
import { setUserName } from '../actions/root';
import {
  createRoomErrorAction,
  createRoomSuccessAction,
  refreshRoomId,
  joinRoomSuccessAction,
  joinRoomErrorAction,
} from '../actions/room';
import nav from 'utils/nav';
import { showError } from '../../utils/toast';
import { logEvent } from '../../utils/analytics';

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
    yield database.ref(`roomsData`).update({
      [roomId]: newRoom,
    });
    yield database
      .ref(`roomsRemotePlayers/${roomId}/${state.root.userId}`)
      .update({
        createdAt: databaseServerTimestamp,
        updatedAt: databaseServerTimestamp,
        name: userName,
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

const joinRoomSaga = function* ({ payload: { userName, roomId } }) {
  // Save the username first
  yield put(setUserName(userName));

  // Get global state for the user id
  const state = store.getState();
  // owner: state.root.userId,

  // Now lets try to join the room
  const roomOnline = yield database
    .ref(`roomsData/${roomId}/online`)
    .once('value');
  if (roomOnline.exists() && roomOnline.val() === true) {
    console.log('Room online and exists');
    // logEvent('ROOM_PLAYER_JOINED');
    try {
      yield database
        .ref(`roomsRemotePlayers/${roomId}/${state.root.userId}`)
        .update({
          createdAt: databaseServerTimestamp,
          updatedAt: databaseServerTimestamp,
          name: userName,
        });
      yield put(joinRoomSuccessAction());
    } catch (err) {
      showError('Failed to mark self in remote room.');
      yield put(joinRoomErrorAction(err));
      console.log(err);
    }
  } else {
    console.log('Room not online / doesnt exist');
    yield put(joinRoomErrorAction('Unable to connect to the room'));
    showError('Failed to join room. Please try again.');
  }
};
export { createRoomSaga, joinRoomSaga };
