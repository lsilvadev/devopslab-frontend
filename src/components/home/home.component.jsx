import React from 'react'
import PropTypes from 'prop-types';

import { HomeContainerStyled } from './home.style'
import SongListComponent from '../music-list';

function HomeComponent({ songs }) {
  return (
    <HomeContainerStyled>
      <SongListComponent songs={songs} /> 
    </HomeContainerStyled>
  );
};

SongListComponent.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeComponent
