import React, { useState } from 'react';

import { setUserName } from 'actions/root';

import { css } from 'emotion';
import { Container, Col, Row, Input, Button, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { database, databaseServerTimestamp } from 'services/firebase';
import _ from 'lodash';

const joinGame = (roomId) => {
  const promises = [];
  const state = store.getState();

  const newRoom = {
    ...state.config,
    ...state.game,
    owner: state.root.userId,
    updatedAt: databaseServerTimestamp,
  };

  // TODO: test doing this when someone else already created a room with this id..
  database.ref(`rooms`).update({
    [roomId]: newRoom,
  });
  // return database.ref(`rooms/${roomId}`).once("value", snapshot => {
  //   if (snapshot.exists()) {
  //     console.log(`room ${roomId} exists`);
  //     const email = snapshot.val();
  //   } else {
  //     console.log(`room ${roomId} does not exist`);
  //     return Promise.reject('Room does not exists')
  //   }
  // });
};
const CreateRoom = () => {
  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);
  // Local state for input
  const [name, onNameUpdate] = useState(rootState.root.userName);
  // Function for going to the created room
  const history = useHistory();
  const onClick = async () => {
    console.log(rootState.room.id);
    dispatch(setUserName(name));
    try {
      await joinGame(rootState.room.id);
    } catch (e) {
      console.log('Caught exception joining room');
      return;
    }
    history.push(`/rooms/${rootState.room.id}`);
  };
  return (
    <Container className={styles.container}>
      <Form>
        <Row className={styles.item}>
          <h5>Create a room</h5>
        </Row>
        <Row className={styles.item}>
          <Input
            type="text"
            value={name}
            name="player_input"
            placeholder="Username"
            onChange={(e) => onNameUpdate(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Col>
            <Button
              disabled={!name}
              size="100px"
              color="primary"
              onClick={onClick}
            >
              Create
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const styles = {
  container: css({
    textAlign: 'center',
  }),
  item: css({
    marginTop: '10px',
  }),
};

export default CreateRoom;
