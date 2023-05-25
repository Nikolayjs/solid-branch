import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table/Table';
import Button from '../components/ui/Button/Button';
import MainLayout from '../layouts/MainLayout';
import { IData } from '../types/transaction.types';

const FullList: FC<{ data?: Array<IData> }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Button onClick={() => navigate('/')}>Назад</Button>
      <h3 className="my-5 text-center text-2xl">All transaction</h3>
      <Table data={data} />
    </MainLayout>
  );
};

export default FullList;
