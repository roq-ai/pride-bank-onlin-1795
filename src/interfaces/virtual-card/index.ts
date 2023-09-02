import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VirtualCardInterface {
  id?: string;
  card_number: string;
  expiry_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VirtualCardGetQueryInterface extends GetQueryInterface {
  id?: string;
  card_number?: string;
  user_id?: string;
}
