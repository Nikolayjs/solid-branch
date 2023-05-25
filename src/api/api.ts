import { IData } from './../types/transaction.types';
import { dataType } from '../types/transaction.types';
import api from './api.data.json';

const data = JSON.stringify(api);
const parseData = JSON.parse(data);
const fetchData = () => {
  return parseData.data;
};

const fetchTransaction = (type: dataType) => {
  const transactionType = parseData.data.filter((d: IData) => d.type === type);
  return transactionType;
};

export default { fetchData, fetchTransaction };
