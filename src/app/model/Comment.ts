export class ShowComment {
  accountId!: number;
  content!: string;
  roomId!: number;
  rating!: number;
  avatar!: string;
  name!: string;


  constructor(accountId: number, content: string, roomId: number, rating: number, avatar: string, name: string) {
    this.accountId = accountId;
    this.content = content;
    this.roomId = roomId;
    this.rating = rating;
    this.avatar = avatar;
    this.name = name;
  }
}
