import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button/Button';
import Card from '../components/ui/Card/Card';
import Loader from '../components/ui/Loader/Loader';
import { dataType, IData } from '../types/transaction.types';

import styles from './Pages.module.scss';

const Summary: FC<{ data: Array<IData> }> = ({ data }) => {
  const arr: Array<dataType> = ['income', 'outcome', 'investment', 'loan'];
  const navigate = useNavigate();

  const getTitle = (type: dataType): string => {
    return data.filter((d) => d.type === type).length.toString();
  };
  const ucFirst = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  if (!data) return <Loader />;
  return (
    <div className={styles.container}>
      <Card
        title="Welcome"
        text="With supporting text below as a natural lead-in to additional content"
      >
        <div className="flex justify-center">
          <Button onClick={() => navigate('navigator')}>See transaction</Button>
        </div>
        <footer className="text-center mt-5 border-t-2 p-2">
          You have {data.length} transaction
        </footer>
      </Card>
      <div className="flex gap-3 flex-wrap">
        {arr.map((a) => (
          <Card key={a} title={getTitle(a)} text={ucFirst(a)}>
            <div className="flex justify-center">
              <Button onClick={() => navigate('navigator/1')}>See All</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Summary;
