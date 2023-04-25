import React, { useEffect, useState } from 'react'
import { HomeContainerStyled } from './home.style'
import MusicListComponent from '../music-list';
import axios from 'axios';

function HomeComponent() {
    const [musics, setMusics] = useState();

    async function getMusics() {
        await axios("https://backend-xqpysnlvlq-ue.a.run.app/")
        .then((res) => setMusics(res.data))
        .catch((err) => console.log("error"));
    }

	useEffect(() => {
		getMusics()
	}, []);

  return (
    <HomeContainerStyled>
        {musics && (
           <MusicListComponent musicList={musics} /> 
        )}
    </HomeContainerStyled>
  )
}

export default HomeComponent
