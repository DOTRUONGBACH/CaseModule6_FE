export class RoomDetail {
  id!: number;
  name!: string;
  addressRoom!: string;
  price!: number;
  image!: any;
  images!: [];
  description!: string;

  checkinDate!: any;
  checkoutDate!: any;
  amountDay!:number


  constructor(id: number, name: string, addressRoom: string, price: number, image: any, images: [], description: string, checkinDate: any, checkoutDate: any, amountDay: number) {
    this.id = id;
    this.name = name;
    this.addressRoom = addressRoom;
    this.price = price;
    this.image = image;
    this.images = images;
    this.description = description;
    this.checkinDate = checkinDate;
    this.checkoutDate = checkoutDate;
    this.amountDay = amountDay;
  }
}
