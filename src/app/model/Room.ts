import {Account} from "./Account";
import {Address} from "./Address";
import {Category} from "./Category";

export interface Room{
  name?: String ;
  price?:number;
  description?: String;
  addressRoom?: String;
  account?: Account;
  category?: Category;
  status?:Boolean;
  address?: Address;
}
