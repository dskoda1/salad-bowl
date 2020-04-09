import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row, Input, Button, Form } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { joinRoomAction } from 'redux/actions/room';

const JoinRoom = () => {
  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);
  const roomState = useSelector((state) => state.room);
  const history = useHistory();

  // Caching last renders active & joining props
  const [activeRoom, setActiveRoom] = useState(roomState.active);
  const [joiningRoom, setJoiningRoom] = useState(roomState.joining);

  // Local state for input
  const [name, onNameUpdate] = useState(rootState.root.userName || '');
  const [room, onRoomUpdate] = useState(roomState.joinRoomId);
  useEffect(() => {
    if (!activeRoom && roomState.active && joiningRoom && !roomState.joining) {
      history.push(`/rooms/${room}`);
    }
    setActiveRoom(roomState.active);
    setJoiningRoom(roomState.joining);
  }, [
    activeRoom,
    setActiveRoom,
    joiningRoom,
    setJoiningRoom,
    roomState,
    history,
  ]);
  return (
    <Container className={styles.container}>
      <Form>
        <Row className={styles.item}>
          <h5>Join a room</h5>
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
          <Input
            type="text"
            value={room}
            name="room_input"
            placeholder="Room ID"
            onChange={(e) => onRoomUpdate(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Col>
            <Button
              disabled={!name}
              size="100px"
              color="primary"
              onClick={() => dispatch(joinRoomAction(room, name))}
            >
              Join
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

export default JoinRoom;
