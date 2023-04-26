import axios from 'axios';

import { ENDPOINT_BACKEND } from '../defaults/Endpoint';

export const fetchMusic = async () => (
  await axios.get(`${ENDPOINT_BACKEND}`)
    .then((res) => res.data)
    .catch((err) => 'Não foi possivel obter as músicas.')
);

// export const fetchMusic = async () => (
//   await axios.get(`${ENDPOINT_BACKEND}/songs`)
//     .then((res) => res.data)
//     .catch((err) => 'Não foi possivel obter as músicas.')
// );

export const saveMusic = async (body) => (
  await axios.post(`${ENDPOINT_BACKEND}/song`, body)
  .then((res) => {
    console.log('res.data', res.data);
    return res.data;
  })
  .catch((err) => 'Não foi possivel salvar música.')
);