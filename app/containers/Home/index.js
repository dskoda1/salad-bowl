import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import { css } from 'emotion';
import CreateRoom from './CreateRoom';
import RoomInfo from './RoomInfo';
import JoinRoom from './JoinRoom';

const HomePage = () => (
  <Container>
    <Row className={styles.area}>
      <h3>Create or Join a Game of Salad Bowl!</h3>
    </Row>
    <Row className={styles.area}>
      <CreateRoom />
    </Row>
    <Row className={styles.area}>
      <JoinRoom />
    </Row>
    <Row className={styles.area}>
      <RoomInfo />
    </Row>
  </Container>
);

const styles = {
  area: css({
    marginTop: 20,
    justifyContent: 'center',
  }),
};

export default HomePage;
