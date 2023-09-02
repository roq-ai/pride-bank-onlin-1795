import axios from 'axios';
import queryString from 'query-string';
import { FintechInterface, FintechGetQueryInterface } from 'interfaces/fintech';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFinteches = async (query?: FintechGetQueryInterface): Promise<PaginatedInterface<FintechInterface>> => {
  const response = await axios.get('/api/finteches', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFintech = async (fintech: FintechInterface) => {
  const response = await axios.post('/api/finteches', fintech);
  return response.data;
};

export const updateFintechById = async (id: string, fintech: FintechInterface) => {
  const response = await axios.put(`/api/finteches/${id}`, fintech);
  return response.data;
};

export const getFintechById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/finteches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFintechById = async (id: string) => {
  const response = await axios.delete(`/api/finteches/${id}`);
  return response.data;
};
