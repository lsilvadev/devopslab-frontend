import axios from 'axios';

import { ENDPOINT_BACKEND } from '../defaults/Endpoint';

export const fetchSongs = async () => (
  await axios.get(`${ENDPOINT_BACKEND}/songs`)
    .then((res) => res.data)
    .catch((err) => 'Não foi possivel obter as músicas.')
);

export const saveSong = async (body) => (
  await axios.post(`${ENDPOINT_BACKEND}/song`, body)
  .then((res) => res)
  .catch((err) => err)
);
