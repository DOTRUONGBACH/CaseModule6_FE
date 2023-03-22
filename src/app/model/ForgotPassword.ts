export class ForgotPassword{
  private _id: number
  private _email: string


  constructor(id: number, email: string) {
    this._id = id;
    this._email = email;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
