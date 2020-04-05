import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { database } from 'services/firebase';
import { GAME_STATES } from 'consts';
import { logEvent } from 'utils/analytics';

import GamePlayers from './GamePlayers';
import GameConfig from './GameConfig';
import GameInfo from './GameInfo';
import GameManager from './GameManager';
import Room from './Room';

export const Game = ({ roomId, roomConnected, state }) => {
  const [remotePlayers, setRemotePlayers] = useState({});

  useEffect(() => {
    if (roomConnected) {
      logEvent('ROOM_CONNECTED_MASTER');
      const roomRemotePlayersRef = database.ref(
        `/roomsRemotePlayers/${roomId}`
      );
      roomRemotePlayersRef.on('value', (roomRemotePlayersSnapshot) => {
        setRemotePlayers(roomRemotePlayersSnapshot.val());
      });

      return () => roomRemotePlayersRef.off();
    }

    setRemotePlayers({});
  }, [roomConnected]);

  const started = state === GAME_STATES.STARTED;

  return (
    <div className={styles.container}>
      <GamePlayers started={started} remotePlayers={remotePlayers} />
      {!started && <GameConfig />}
      {started && <GameInfo />}
      <GameManager remotePlayers={remotePlayers} started={started} />
      <Room />
    </div>
  );
};

const styles = {
  container: css({
    marginTop: 20,
  }),
  cogIcon: css({
    marginLeft: 5,
  }),
};

const mapStateToProps = (state) => ({
  roomId: state.room.id,
  roomConnected: state.session.roomConnected,
  state: state.game.state,
});

export default connect(mapStateToProps)(Game);
