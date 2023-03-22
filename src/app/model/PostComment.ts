export class PostComment {
  content!: string
  rating!: number;
  account!: any;
  room!: any;
  status!: boolean;

  constructor( content: string, rating: number, account: any, room: any, status: boolean) {
    this.content = content;
    this.rating = rating;
    this.account = account;
    this.room = room;
    this.status = status;
  }
}
