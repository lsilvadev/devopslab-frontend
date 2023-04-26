import { Table } from "antd";
import styled from "styled-components";

export const MusicListContainerStyled = styled('div')`
  padding: 32px 160px 10px 160px;
  background-color: #F8F8F8;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100vh;
`

export const FilterTitleStyled = styled('p')`
  color: #353D58;
  font-size: 24px;
`

export const TableStyled = styled(Table)`
  td, th {
    border-bottom: 5px solid #F8F8F8 !important;
  }

  td {
    color: #353D58 !important;
  }

  th {
    background-color: #F8F8F8 !important;
    color: #9CA6CB !important;
  }
`

export const FilterContainer = styled('div')`
  display: flex;
  gap: 8px;
`