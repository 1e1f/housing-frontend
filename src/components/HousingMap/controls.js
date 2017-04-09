import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from '@hackoregon/component-library/lib/Slider/Slider';

import { changeWages } from '../../state/housingMap';

function controls(props) {
  const { wages, onChange } = props;
  return (
    <div className="slider-container">
      <Slider
        min={wages.min}
        max={wages.max}
        value={wages.value}
        onChange={onChange}
      />
    </div>
  );
}

controls.propTypes = {
  wages: PropTypes.objectOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

function mapStateToProps(state, own) {
  return own;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: val => dispatch(changeWages(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(controls);
