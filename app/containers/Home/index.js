import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import { css } from 'emotion';
import CreateRoom from './CreateRoom';

const HomePage = () => (
  <Container>
    <Row className={styles.area}>
      <h3>Create or Join a Game of Salad Bowl!</h3>
    </Row>
    <Row className={styles.area}>
      <CreateRoom />
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
