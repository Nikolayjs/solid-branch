import { FC } from 'react';

import styles from './Button.module.scss';

type buttonType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: string;
};

const Button: FC<buttonType> = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} className={`bg-blue-500 ${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
