import {Room} from "./Room";
import {Bill} from "./Bill";

export class BillDetail {
  id!: number;
  checkIn!: any;
  checkOut!: any;
  room!: Room;
  bill!: Bill;
  status!: boolean;
  amountDay!: number;
}
