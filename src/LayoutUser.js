import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string } from 'prop-types';
import Header from './Header';
//import './assets/scss/styles.css';

const LayoutUser = ({ route, location }) => (
  <div className="pageWrapper">
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

LayoutUser.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
      }),
    ),
  }).isRequired,
  location: shape({}),
};

export default LayoutUser;
