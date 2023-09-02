import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  account_number: string;
  account_type: string;
  balance: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    transaction?: number;
  };
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  account_number?: string;
  account_type?: string;
  user_id?: string;
}
