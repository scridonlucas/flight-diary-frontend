import axios from 'axios';
import { Diary } from '../types';
const baseUrl = 'http://localhost:3001/';

export const getDiaries = async () => {
  const response = await axios.get<Diary[]>(baseUrl);
  return response.data;
};
