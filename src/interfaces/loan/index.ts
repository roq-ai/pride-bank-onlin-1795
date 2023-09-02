import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  loan_number: string;
  loan_type: string;
  amount: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  loan_number?: string;
  loan_type?: string;
  user_id?: string;
}
