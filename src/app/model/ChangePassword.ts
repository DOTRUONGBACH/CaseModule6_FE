export class ChangePassword{

  private _currentPassword:number
  private _newPassword:number
  private _confirmPassword:number

  constructor( currentPassword: number, newPassword: number, confirmPassword: number) {

    this._currentPassword = currentPassword;
    this._newPassword = newPassword;
    this._confirmPassword = confirmPassword;
  }


  get currentPassword(): number {
    return this._currentPassword;
  }

  set currentPassword(value: number) {
    this._currentPassword = value;
  }

  get newPassword(): number {
    return this._newPassword;
  }

  set newPassword(value: number) {
    this._newPassword = value;
  }

  get confirmPassword(): number {
    return this._confirmPassword;
  }

  set confirmPassword(value: number) {
    this._confirmPassword = value;
  }
}
