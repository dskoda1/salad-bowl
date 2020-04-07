import { takeLatest } from 'redux-saga/effects';

import { CREATE_ROOM } from 'redux/actions/room';
import { createRoomSaga } from 'redux/sagas/room';

export default function* () {
  yield takeLatest(CREATE_ROOM, createRoomSaga);
}
