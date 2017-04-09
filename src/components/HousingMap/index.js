import React from 'react';
import { connect } from 'react-redux';

import LeafletMap from '@hackoregon/component-library/lib/LeafletMap/LeafletMap';

import Controls from './controls';

import './styles.css';

function housingMap({ controls, map }) {
  return (<div className="housing-map-container">
    <LeafletMap {...map} >
      <div />
    </LeafletMap>
    <Controls {...controls} />
  </div>
  );
}

housingMap.propTypes = {
  wages: React.PropTypes.objectOf(React.PropTypes.number)
}

const initialState = { controls: { wages: 10 } };

function mapStateToProps({ housingMap } = initialState) {

  const props = {
    controls: {
      wages: {
        min: 7,
        max: 50,
        value: housingMap.controls.wages
      },
      map: {
        width: 600,
        height: 400,
        zoom: 5,
        center: [20, 10],
        scrollWheelZoom: true
      }
    }
  }
  return props;
};

export default connect(mapStateToProps)(housingMap);
