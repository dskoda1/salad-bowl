import React from 'react';
import { connect } from 'react-redux';
import selectedLocationsCountSelector from 'redux/selectors/selectedLocationsCount';
import totalLocationsCountSelector from 'redux/selectors/totalLocationsCount';

export const LocationsCount = ({
  className,
  style,
  selectedLocationsCount,
  totalLocationsCount,
}) => (
  <span className={className} style={style}>
    {selectedLocationsCount}/{totalLocationsCount}
  </span>
);

const mapStateToProps = (state) => ({
  selectedLocationsCount: selectedLocationsCountSelector(state),
  totalLocationsCount: totalLocationsCountSelector(state),
});

export default connect(mapStateToProps)(LocationsCount);
