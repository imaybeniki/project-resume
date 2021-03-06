import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header/Header'
import Icons from '../../molecules/icons/Icons';
import homepage from './homepageDetails.json';
import './homepage.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {array} history: the React Router history
 * @property {object} match: the object with URL information from React Router
 */
export default function Homepage({ history, location }){

  return (
    <div className="full-page">
      <Header history={history} unstickyHeaderText="Nicole May" stickyHeaderText="Interactive Resume"/>
      <div className="icon-container">
        <Icons icons={homepage.icons} history={history} location={location}/>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}