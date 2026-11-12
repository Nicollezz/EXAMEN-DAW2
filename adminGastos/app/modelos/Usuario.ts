export interface Usuario {
  isLoggedIn: boolean;
  login: (u: string, c: string) => boolean;
  logout: () => void;
}