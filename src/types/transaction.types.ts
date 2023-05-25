export type dataType = 'income' | 'outcome' | 'investment' | 'loan';
export interface IData {
  _id: string;
  amount: string;
  type: dataType;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}
export interface ITransaction {
  [key: string]: Array<IData>;
}
