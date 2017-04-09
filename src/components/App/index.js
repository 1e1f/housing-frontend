/* eslint-disable import/no-extraneous-dependencies */
// This should probably be the core component, containing, nav etc

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '@hackoregon/component-library/lib/Navigation/Header';

import HousingMap from '../HousingMap';

const Container = styled.div`
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App(props) {
  return (
    <Container>
      <Header />
      {React.Children.toArray(props.children)}
      <HousingMap />
    </Container>
  );
}

App.displayName = 'App';
App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
