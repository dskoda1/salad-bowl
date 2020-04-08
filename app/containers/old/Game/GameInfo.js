import React from 'react';
import { connect } from 'react-redux';
import gameLocationsSelector from 'redux/selectors/gameLocations';
import selectedLocationsCountSelector from 'redux/selectors/selectedLocationsCount';

import TimerManager from './TimerManager';

export const GameInfo = ({
  matchId,
  gameLocations,
  spyCount,
  prevLocation,
  selectedLocationsCount,
}) => (
  <div>
    <TimerManager />
  </div>
);

const mapStateToProps = (state) => ({
  gameLocations: gameLocationsSelector(state),
  selectedLocationsCount: selectedLocationsCountSelector(state),
  spyCount: state.config.spyCount,
  prevLocation: state.game.prevLocation,
  matchId: state.game.matchId,
});

export default connect(mapStateToProps)(GameInfo);
