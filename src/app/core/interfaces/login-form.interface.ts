

export interface LoginForm {
    email: string;
    password: string;

}
export interface LoginResponse {
    user: {
      id: string;
      name: string;
      email: string;
      emailValidated: boolean;
      role: string[];
    };
    token: string;
  }
  