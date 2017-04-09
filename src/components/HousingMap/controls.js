import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import Slider from '@hackoregon/component-library/lib/Slider/Slider';

import { assocPath } from 'ramda';


import { changeWages } from '../../state/housingMap';

function controls(props) {
  const { wages, onChange } = props;
  return (
    <div className="slider-container">
      <Slider min={wages.min}
        max={wages.max}
        value={wages.value}
        onChange={onChange} />
    </div>
  )
}

controls.propTypes = {
  wages: React.PropTypes.objectOf(React.PropTypes.number)
};

function mapStateToProps(state, own) {
  return own;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (val) => dispatch(changeWages(val))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(controls);