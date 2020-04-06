import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { refreshRoomId } from 'actions/room';

import { css } from 'emotion';
import { Button } from 'reactstrap';

const RoomInfo = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className={styles.area}>
        <h3>Your active rooms</h3>
      </Row>
      <Row className={styles.area}>
        <Col>Room ID: {state.room.id}</Col>
        <Col><Button onClick={dispatch(refreshRoomId())}>Generate new ID</Button></Col>
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
