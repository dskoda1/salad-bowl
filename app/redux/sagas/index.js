import { takeLatest } from 'redux-saga/effects';

import { CREATE_ROOM, JOIN_ROOM } from 'redux/actions/room';
import { createRoomSaga, joinRoomSaga } from 'redux/sagas/room';

export default function* () {
  yield takeLatest(CREATE_ROOM, createRoomSaga);
  yield takeLatest(JOIN_ROOM, joinRoomSaga);
}
