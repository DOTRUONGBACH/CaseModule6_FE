export class Account{
  id!: number;
  name!: string;
  password!: string;
  phone!: string;
   email!: string;
  avatar!: string;

  constructor(id: number, name: string, password: string, phone: string, email: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.email = email;
    this.avatar = avatar;
  }
}
