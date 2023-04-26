import React, { useEffect, useState } from 'react'

import { fetchMusic } from '../../integrations/MusicAPI';

import { HomeContainerStyled } from './home.style'
import MusicListComponent from '../music-list';

function HomeComponent() {
  const [musics, setMusics] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetchMusic();
      setMusics(response);
    })();
  }, []);

  return (
    <HomeContainerStyled>
      <MusicListComponent musicList={musics} /> 
      {/* {musics && (
        <MusicListComponent musicList={musics} /> 
      )} */}
    </HomeContainerStyled>
  )
}

export default HomeComponent
