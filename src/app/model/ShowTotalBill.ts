export class ShowTotalBill {
  totalBill!: number;
  month!: number;

  constructor(totalBill: number, month: number) {
    this.totalBill = totalBill;
    this.month = month;

  }
}
