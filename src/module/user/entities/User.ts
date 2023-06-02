export class User {
  id?: string;
  name: string;
  email: string;
  password: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.email = data;
    this.password = data.password;
  }

  update(data: any) {
    this.id = data.id;
    this.name = data;
    this.email = data.email;
    this.password = data.password;
  }
}
