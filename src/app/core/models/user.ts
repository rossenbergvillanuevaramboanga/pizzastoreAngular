export interface User {
  username?: string;
  password?: string;
  token: string;
  role?: 'ROLE_ADMIN' | 'ROLE_PIZZAIOLO' | 'ROLE_PROPRIETARIO' | 'FATTORINO';
}
