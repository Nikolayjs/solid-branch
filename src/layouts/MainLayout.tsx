import { FC, ReactNode } from 'react';

import styles from './MainLayout.module.scss';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
