

import {Address} from "./Address";
import {Category} from "./Category";
import {Account} from "./Account";

export interface Room{
  id?: number;
  name?: String ;
  price?:any;
  description?: String;
  addressRoom?: String;
  account?: Account;
  category?: Category;
  status?:boolean;
  address?: Address;

}
