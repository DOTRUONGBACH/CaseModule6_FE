export class TopRent {
  id!: number;
  name!: string;
  images!:string;
  price!:number;
  sum!:number;


  constructor(id: number, name: string, images: string, price: number, sum: number) {
    this.id = id;
    this.name = name;
    this.images = images;
    this.price = price;
    this.sum = sum;
  }
}
