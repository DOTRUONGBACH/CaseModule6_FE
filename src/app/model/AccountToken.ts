import {Role} from "./Role";

export class AccountToken{
  private _id:number
  private _name:string
  private _email:string
  private _phone:string
  private _avatar:string
  private _token:string
  private _roles:Role[]


  constructor(id: number, name: string, email: string, phone: string, avatar: string, token: string, roles: Role[]) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._avatar = avatar;
    this._token = token;
    this._roles = roles;
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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get roles(): Role[] {
    return this._roles;
  }

  set roles(value: Role[]) {
    this._roles = value;
  }
}
