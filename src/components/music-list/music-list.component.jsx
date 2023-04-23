// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { columns } from './music-list.constants'
import { FilterTitleStyled, MusicListContainerStyled, TableStyled, FilterContainer } from './music-list.style'
import { GENRES_LIST } from '../../genres-list'
import { Button, Select } from 'antd'

function MusicListComponent(musicList) {
  const [filteredMusicList, setFilteredMusicList] = useState([])
  const [genreFilter, setGenreFilter] = useState()

  useEffect(() => {
    if(genreFilter){
      const newList = musicList?.musicList?.filter(item => item.genre === genreFilter?.label)
      setFilteredMusicList(newList)
    } else {
      setFilteredMusicList(musicList?.musicList)
    }
  }, [genreFilter, musicList?.musicList])

  return (
    <MusicListContainerStyled>
      <FilterTitleStyled>Filtros</FilterTitleStyled>
      <FilterContainer>
        <Select
          placeholder="Gênero"
          value={genreFilter?.value}
          onChange={(value, option) => setGenreFilter({value: value, label: option.label})}
          options={GENRES_LIST}
          style={{
            width: 140
          }}
        />
        <Button onClick={() => setGenreFilter()} disabled={!genreFilter}>Limpar filtros</Button>
      </FilterContainer>
      <TableStyled columns={columns} dataSource={filteredMusicList} rowKey="song_id" />
    </MusicListContainerStyled>
  )
}

export default MusicListComponent
