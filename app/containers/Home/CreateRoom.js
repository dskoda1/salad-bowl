import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row, Input, Button, Form } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createRoomAction } from '../../redux/actions/room';
import Spinner from '../../components/Spinner/Spinner';

const CreateRoom = () => {
  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);
  const roomState = useSelector((state) => state.room);
  const history = useHistory();

  // Caching last renders active & joining props
  const [activeRoom, setActiveRoom] = useState(roomState.active);
  const [creatingRoom, setCreatingRoom] = useState(roomState.creating);
  useEffect(() => {
    if (
      !activeRoom &&
      roomState.active &&
      creatingRoom &&
      !roomState.creating
    ) {
      history.push(`/rooms/${roomState.id}`);
    }
    setActiveRoom(roomState.active);
    setCreatingRoom(roomState.creating);
  }, [
    activeRoom,
    setActiveRoom,
    creatingRoom,
    setCreatingRoom,
    roomState,
    history,
  ]);

  // Local state for input
  const [name, onNameUpdate] = useState(rootState.root.userName || '');
  // Function for going to the created room
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
              onClick={() =>
                dispatch(createRoomAction(rootState.room.id, name))
              }
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
