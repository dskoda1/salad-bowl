import React, { useState } from 'react';

import { setUserName } from 'actions/root';

import { css } from 'emotion';
import { Container, Col, Row, Input, Button, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateRoom = () => {
  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);
  // Local state for input
  const [name, onNameUpdate] = useState(rootState.root.userName);
  // Function for going to the created room
  const history = useHistory();
  const onClick = () => {
    console.log(rootState.room.id);
    dispatch(setUserName(name));
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
