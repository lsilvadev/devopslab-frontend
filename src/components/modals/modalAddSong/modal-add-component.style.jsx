import styled from 'styled-components';
import { Button, Select as SelectAntd, Input as InputAntd } from 'antd'

import { 
  DARK_PRIMARY_COLOR,
  WHITE,
  FONT_COLOR 
} from '../../../defaults/Colors';

export const Title = styled.h2`
  color: ${FONT_COLOR};
`;

export const Select = styled(SelectAntd).attrs({
  className: 'modal__select-antd'
})`
  &.modal__select-antd .ant-select-selector {
    align-items: center;
    height: 40px;
  }
`;

export const Input = styled(InputAntd)`
  height: 40px;
`;

export const BtnAddMusic = styled(Button).attrs({
  type: 'primary',
  htmlType: 'submit'
})`
  background-color: ${DARK_PRIMARY_COLOR};
  border-color: ${DARK_PRIMARY_COLOR};
  color: ${WHITE};
  width: 100%;
  height: 45px;
  border-radius: 5px;
`;
