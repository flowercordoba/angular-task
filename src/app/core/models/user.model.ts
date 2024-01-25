export class UserModel {
  constructor(
   
    public name: string,
    public email: string,
    public token: string,
    public password?: string,
    public role?: string,
    public id?: string,
    public emailValidated?: boolean,
    
  ) {}

  printUser(){
    console.log(this.name)
  }
}
