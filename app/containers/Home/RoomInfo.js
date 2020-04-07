import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { refreshRoomId } from 'redux/actions/room';

import { css } from 'emotion';
import { Button } from 'reactstrap';
import { auth } from 'services/firebase';
import { setUserIdAction } from '../../redux/actions/root';

const RoomInfo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const createNewUserId = () => {
    auth.signInAnonymously().then((authUser) => {
      console.log(authUser);
    });
  };

  return (
    <Container>
      <Row className={styles.area}>
        <h3>Your active rooms</h3>
      </Row>
      <Row className={styles.area}>
        <Col>Room ID: {state.room.id}</Col>
        <Col>
          <Button onClick={() => dispatch(refreshRoomId())}>
            Generate new ID
          </Button>
        </Col>
      </Row>
      <Row className={styles.area}>
        <Col>User ID: {state.root.userId}</Col>
        <Col>
          <Button onClick={createNewUserId}>Regenerate UserID</Button>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  area: css({
    marginTop: 20,
    justifyContent: 'center',
  }),
};

export default RoomInfo;
