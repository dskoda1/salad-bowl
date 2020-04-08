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
  const history = useHistory();

  const [activeRoom, setActiveRoom] = useState(rootState.room.active);
  useEffect(() => {
    if (!activeRoom && rootState.room.active) {
      history.push(`/rooms/${rootState.room.id}`);
    }
    setActiveRoom(rootState.room.active);
  }, [activeRoom, setActiveRoom, rootState.room.active, history]);

  // Local state for input
  const [name, onNameUpdate] = useState(rootState.root.userName || '');
  const [room, onRoomUpdate] = useState('');
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
