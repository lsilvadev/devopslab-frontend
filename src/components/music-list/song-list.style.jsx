import { Table } from "antd";
import styled from "styled-components";

import { COLOR_BG_CONTAINER, FONT_COLOR, FONT_DARK_COLOR } from '../../defaults/Colors';

export const SongListContainerStyled = styled('div')`
  padding: 32px 160px 10px 160px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100vh;
`;

export const FilterTitleStyled = styled('p')`
  color: ${FONT_COLOR};
  font-size: 24px;
`;

export const TableStyled = styled(Table).attrs({
  className: 'music-list__table'
})`
  &.music-list__table {
    tr.ant-table-row, td.ant-table-cell {
      border-bottom: 5px solid ${COLOR_BG_CONTAINER};
    }
  
    .ant-table-cell {
      color: ${FONT_COLOR};
    }
  
    th.ant-table-cell {
      background-color: ${COLOR_BG_CONTAINER};
      color: ${FONT_DARK_COLOR};
    }
  }
`;

export const FilterContainer = styled('div')`
  display: flex;
  gap: 8px;
`;
