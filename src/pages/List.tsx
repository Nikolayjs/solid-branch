import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import Tab from '../components/Tab/Tab';
import Button from '../components/ui/Button/Button';
import Loader from '../components/ui/Loader/Loader';
import MainLayout from '../layouts/MainLayout';
import { ITransaction } from '../types/transaction.types';

import styles from './Pages.module.scss';

const List: FC = () => {
  const [transaction, setTransaction] = useState<ITransaction>();
  const navigate = useNavigate();
  useEffect(() => {
    setTransaction({
      income: api.fetchTransaction('income'),
      outcome: api.fetchTransaction('outcome'),
      investment: api.fetchTransaction('investment'),
      loan: api.fetchTransaction('loan'),
    });
  }, []);

  const { tab } = useParams();
  if (!transaction) return <Loader />;
  return (
    <MainLayout>
      <Button onClick={() => navigate('/')}>Назад</Button>
      <div className={styles.list}>
        <Tab tab={tab} data={transaction} />
      </div>
    </MainLayout>
  );
};

export default List;
