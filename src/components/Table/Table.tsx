import { FC } from 'react';
import { IData } from '../../types/transaction.types';

import styles from './Table.module.scss';

const Table: FC<{ data?: Array<IData> }> = ({ data }) => {
  const colorAssets = {
    income: 'bg-green-50 text-green-600',
    outcome: 'bg-blue-50 text-blue-600',
    investment: 'bg-cyan-50 text-cyan-600',
    loan: 'bg-violet-50 text-violet-600',
  };
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">State</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d) => (
              <tr key={d._id}>
                <th>
                  {d.name.first} {d.name.last}
                </th>
                <td>{d.company}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <span className={`${colorAssets[d.type]}`}>{d.type}</span>
                </td>
                <td>{d.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
