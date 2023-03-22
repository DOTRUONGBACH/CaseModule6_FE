import {Role} from "./Role";

export class AccountP{
  id:number;
  name:string;
  password:string;
  phone:string;
  email:string;
  avatar:string;
  roles:Role[] ;
  status: boolean

  constructor(id: number, name: string, password: string, phone: string, email: string, avatar: string, roles: Role[], status: boolean) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.email = email;
    this.avatar = avatar;
    this.roles = roles;
    this.status = status;
  }
}
