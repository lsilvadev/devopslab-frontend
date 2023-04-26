// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { columns } from './music-list.constants';
import { FilterTitleStyled, MusicListContainerStyled, TableStyled, FilterContainer } from './music-list.style';
import { GENRES_LIST } from '../../genres-list';
import { Button, Select, Spin } from 'antd';

function MusicListComponent(musicList) {
  const [filteredMusicList, setFilteredMusicList] = useState([]);
  const [genreFilter, setGenreFilter] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (genreFilter) {
      const newList = musicList?.musicList?.filter(item => item.genre === genreFilter?.label);
      setFilteredMusicList(newList);
    } else {
      setFilteredMusicList(musicList?.musicList);
    }

    setIsLoading(false);
  }, [genreFilter, musicList?.musicList]);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <MusicListContainerStyled>
      <FilterTitleStyled>Filtros</FilterTitleStyled>
      <FilterContainer>
        <Select
          placeholder="Gênero"
          value={genreFilter?.value}
          onChange={(value, option) => setGenreFilter({ value: value, label: option.label })}
          options={GENRES_LIST}
          style={{
            width: 140
          }}
        />
        <Button onClick={() => setGenreFilter()} disabled={!genreFilter}>Limpar filtros</Button>
      </FilterContainer>

      <Spin spinning={isLoading} indicator={antIcon}>
        <TableStyled 
          locale={{ emptyText: 'Não há músicas para exibir' }}
          columns={columns} 
          dataSource={filteredMusicList} 
          rowKey="song_id" 
        />
      </Spin>
    </MusicListContainerStyled>
  )
}

export default MusicListComponent
