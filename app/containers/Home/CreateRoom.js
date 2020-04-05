import React, { useState } from 'react';

import { css } from 'emotion';
import { Container, Col, Row, Input, Button, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const CreateRoom = () => {
  const history = useHistory();
  const [name, onNameUpdate] = useState('');
  const onClick = () => {
    history.push(`/rooms/${name}`);
    console.log(name);
  };
  return (
    <Container>
      <Form className={styles.form}>
        <Row>
          <h5>Create a room</h5>
        </Row>
        <Row>
          <Input
            type="text"
            value={name}
            name="player_input"
            placeholder="Username"
            onChange={(e) => onNameUpdate(e.target.value)}
          />
        </Row>
        <Row>
          <Col>
            <Button size="100px" color="primary" onClick={onClick}>
              Create
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const styles = {
  form: css({
    alignItems: 'center',
  }),
};

export default CreateRoom;
