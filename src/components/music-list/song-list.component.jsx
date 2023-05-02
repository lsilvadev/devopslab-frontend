import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Select } from 'antd';

import { GENRES_TYPES } from '../../defaults/genres';

import { columns } from './song-list.constants';
import { FilterTitleStyled, SongListContainerStyled, TableStyled, FilterContainer } from './song-list.style';

function SongListComponent({ songs }) {
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genreFilter, setGenreFilter] = useState();

  useEffect(() => {
    if (genreFilter) {
      const currSongs = songs?.filter(item => item.genre === genreFilter?.label);
      setFilteredSongs(currSongs);
    } else {
      setFilteredSongs(songs);
    }
  }, [genreFilter, songs]);

  return (
    <SongListContainerStyled>
      <FilterTitleStyled>Filtros</FilterTitleStyled>
      <FilterContainer>
        <Select
          placeholder="Gênero"
          value={genreFilter?.value}
          onChange={(value, option) => setGenreFilter({ value: value, label: option.label })}
          options={GENRES_TYPES}
          style={{
            width: 140
          }}
        />
        <Button onClick={() => setGenreFilter()} disabled={!genreFilter}>Limpar filtros</Button>
      </FilterContainer>

      <TableStyled 
        locale={{ emptyText: 'Não há músicas para exibir' }}
        columns={columns} 
        dataSource={filteredSongs} 
        rowKey="song_id" 
      />
    </SongListContainerStyled>
  );
};

SongListComponent.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SongListComponent;
