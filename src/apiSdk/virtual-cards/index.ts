import axios from 'axios';
import queryString from 'query-string';
import { VirtualCardInterface, VirtualCardGetQueryInterface } from 'interfaces/virtual-card';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVirtualCards = async (
  query?: VirtualCardGetQueryInterface,
): Promise<PaginatedInterface<VirtualCardInterface>> => {
  const response = await axios.get('/api/virtual-cards', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVirtualCard = async (virtualCard: VirtualCardInterface) => {
  const response = await axios.post('/api/virtual-cards', virtualCard);
  return response.data;
};

export const updateVirtualCardById = async (id: string, virtualCard: VirtualCardInterface) => {
  const response = await axios.put(`/api/virtual-cards/${id}`, virtualCard);
  return response.data;
};

export const getVirtualCardById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/virtual-cards/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVirtualCardById = async (id: string) => {
  const response = await axios.delete(`/api/virtual-cards/${id}`);
  return response.data;
};
