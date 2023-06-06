import {Account} from "./Account";
import {Address} from "./Address";
import {Category} from "./Category";



export class Room {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  addressRoom!: string;
  account!: Account;
  category!: Category;
  address!: Address;

  constructor(id: number, name: string, price: number, description: string, addressRoom: string, account: Account, category: Category, address: Address) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.addressRoom = addressRoom;
    this.account = account;
    this.category = category;
    this.address = address;
  }

}
