import {Account} from "./Account";

export class Bill {
  id!: number;
  date!: any;
  total!: number;
  account!: Account;
  status!: boolean;
}
