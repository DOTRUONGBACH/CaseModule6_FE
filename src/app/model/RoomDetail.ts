export class RoomDetail {
  id!: number;
  name!: string;
  addressRoom!: string;
  price!: number;
  image!: any;
  images!: [];
  description!: string;


  constructor(id: number, name: string, addressRoom: string, price: number, image: any, description: string) {
    this.id = id;
    this.name = name;
    this.addressRoom = addressRoom;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}
