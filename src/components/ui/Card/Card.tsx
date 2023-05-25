import { FC, ReactNode } from 'react';
import styles from './Card.module.scss';

const Card: FC<{ title: string; text: string; type?: string; children?: string | ReactNode }> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className={styles.card}>
      <div>
        <div className="mb-5 border-b-2">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
