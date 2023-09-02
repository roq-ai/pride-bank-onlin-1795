import { UserInterface } from 'interfaces/user';
import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  transaction_type: string;
  amount: number;
  user_id: string;
  account_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  account?: AccountInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  transaction_type?: string;
  user_id?: string;
  account_id?: string;
}
