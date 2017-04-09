import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { assocPath } from 'ramda';
import isClient from '@hackoregon/component-library/lib/utils/isClient';
import LeafletMap from '@hackoregon/component-library/lib/LeafletMap/LeafletMap';
import Controls from './controls';

import './styles.css';

function housingMap({ controls, map }) {
  return (<div className="housing-map-container">
    {isClient && <LeafletMap {...map} >
      <div />
    </LeafletMap>}
    <Controls {...controls} />
  </div>
  );
}

const initialState = { controls: { wages: 10 } };

const defaultProps = {
  controls: {
    wages: {
      min: 7,
      max: 50,
      value: 10,
    },
  },
  map: {
    width: 600,
    height: 400,
    zoom: 5,
    center: [20, 10],
    scrollWheelZoom: true,
  },
};

function mapStateToProps(state = initialState) {
  return assocPath(['controls', 'wages', 'value'], state.housingMap.controls.wages, defaultProps);
}

housingMap.propTypes = PropTypes.shape(defaultProps).isRequired;

export default connect(mapStateToProps)(housingMap);
