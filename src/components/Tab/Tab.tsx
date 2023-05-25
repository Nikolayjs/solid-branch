import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITransaction } from '../../types/transaction.types';
import Table from '../Table/Table';
import Loader from '../ui/Loader/Loader';

import styles from './Tab.module.scss';

const Tab: FC<{ tab: string | undefined; data: ITransaction }> = ({ tab, data }) => {
  const [activeTab, setActiveTab] = useState<string | undefined>('');
  const [newTab, setNewTab] = useState<Array<string>>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setNewTab(['Income', 'Outcome', 'Investment', 'Loan']);
    setActiveTab(tab);
  }, []);
  const changeTab = (value: string) => {
    setActiveTab(value);
    navigate(`/navigator/${value}`);
  };
  if (!data) return <Loader />;
  console.log(data);

  return (
    <div>
      <div className={styles.container}>
        <ul>
          {newTab.map((n, i) => (
            <li key={i}>
              <span
                onClick={() => changeTab(`${(i + 1).toString()}`)}
                className={
                  activeTab === `${(i + 1).toString()}` ? styles.activeTab : styles.inactiveTab
                }
              >
                {n}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-3 w-full">
        {newTab.map((n, i) => (
          <div key={i} className={activeTab !== `${(i + 1).toString()}` ? 'hidden' : ''}>
            <Table data={data[n.toLowerCase()]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
