
import {Role} from "./Role";

export class Account{
  private _id:number
  private _name:string
  private _password:string
  private _phone: string
  private _email:string
  private _avatar:string


  private _role:Role[]

  constructor(id: number, name: string, password: string, phone: string, email: string, avatar: string, role: Role[]) {
    this._id = id;
    this._name = name;
    this._password = password;
    this._phone = phone;
    this._email = email;
    this._avatar = avatar;
    this._role = role;

  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get role(): Role[] {
    return this._role;
  }

  set role(value: Role[]) {
    this._role = value;
  }
}

